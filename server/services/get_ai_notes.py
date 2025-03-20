import os
import openai
from openai import AzureOpenAI
from dotenv import load_dotenv
import json

load_dotenv()


import ast
import re

def extract_lists_from_string(input_string):
    # Find all Python-style lists in the string using regex
    list_pattern = r'(\w+\s*=\s*\[[^\]]+\])'  
    matches = re.findall(list_pattern, input_string, re.DOTALL)
    
    extracted_data = {}

    for match in matches:
        # Split into key and value
        key, value = match.split("=", 1)
        key = key.strip()
        
        # Safely parse the list using ast.literal_eval
        extracted_data[key] = ast.literal_eval(value.strip())

    return extracted_data




COMPLETIONS_AZURE_ENDPOINT = os.getenv("COMPLETIONS_AZURE_ENDPOINT")
COMPLETIONS_API_KEY = os.getenv("COMPLETIONS_API_KEY")
COMPLETIONS_API_VERSION = os.getenv("COMPLETIONS_API_VERSION")
COMPLETIONS_MODEL=os.getenv("COMPLETIONS_MODEL")


print(COMPLETIONS_MODEL)
print(COMPLETIONS_API_KEY)
print(COMPLETIONS_AZURE_ENDPOINT)
print(COMPLETIONS_API_VERSION)

def format_string(note_string, word_limit):
  note_string = note_string.strip()
  note_arr = note_string.split(" ")

  if len(note_arr) <= word_limit:
    return note_string

  return " ".join(note_arr[0:word_limit])



def get_notes(preferences, impairments, jobObjectRawString):

  word_limit = 200;
  preferences = format_string(preferences, word_limit)
  impairments = format_string(impairments, word_limit)


  client = AzureOpenAI(
    azure_endpoint = COMPLETIONS_AZURE_ENDPOINT, 
    api_key = COMPLETIONS_API_KEY,  
    api_version = COMPLETIONS_API_VERSION
  )

  jobObject = json.loads(jobObjectRawString)

  description = jobObject["description"]
  skills = jobObject["skills"]
  responsibilities = jobObject["responsibilities"]
  city = jobObject["city"]
  state = jobObject["state"]
  workType = jobObject["workType"]
  employmentType = jobObject["employmentType"]
  company = jobObject["company"]



  if preferences != "" and impairments != "":
    initial_setting = fr"""You are a model that takes user preferences and user impairments as well as job details of a specific job. Your task is to return two lists. One list of reasons why this person will enjoy the job due to their preferences/impairments, and another list of things the user can do to make the job more maangable for them because of their preferences/impairments."""
  elif preferences != "":
    initial_setting = fr"""You are a model that takes user preferences as well job details of a specific job. Your task is to return two lists. One list of reasons why this person will enjoy the job due to their preferences, and another list of things the user can do to make the job managable for them because of their preferences."""
  else:
    initial_setting = fr"""You are a model that takes user impairments as well job details of a specific job. Your task is to return two lists. One list of reasons why this person will enjoy the job due to their impairments, and another list of things the user can do to make the job managable for them because of their preferences."""


  if preferences != "" and impairments != "":
    user_prompt = fr"""I am looking for a job. My preferences are the following: {preferences}. I have the following impairments: {impairments}."""
  elif preferences != "":
    user_prompt = fr"""I am looking for a job. My preferences are the following: {preferences}."""
  else:
    user_prompt = fr"""I am looking for a job. I have the following impairments: {impairments}."""
  
  job_prompt = fr"""The job I am looking at has these details. Description: {description}, responsibilities: {responsibilities}, skills {skills}, type of work: {workType}, type of employment: {employmentType}, city: {city}"""


  if preferences != "" and impairments != "":
    final_prompt = fr"""Please give me your response formatted as python lists titled matchNotes and jobNotes. Give at most 5 notes per list. If the job is a bad fit, say that include that in the notes."""
  elif preferences != "":
    final_prompt = fr"""Please give me your response formatted as a python list titled matchNotes. Give at most 5 notes. If the job is a bad fit, say that include that in the notes."""
  else:
    final_prompt = fr"""Please give me your response formatted as a python list titled challengeNotes. Give at most 5 notes. If the job is a bad fit, say that include that in the notes."""


  response = client.chat.completions.create(
      model=COMPLETIONS_MODEL, # model = "deployment_name".
      messages=[
          {"role": "system", "content": initial_setting},
          {"role": "user", "content": user_prompt},
          {"role": "assistant", "content": "Sure. Can you provide me the job details?"},
          {"role": "user", "content": job_prompt},
          {"role": "assistant", "content": "Is there anything else I need to know?"},
          {"role": "user", "content": final_prompt}

      ]
  )



  print("Maheer", response.choices[0].message.content)


  parsed_data = extract_lists_from_string(response.choices[0].message.content)
  
  return {
    "matchNotes" :parsed_data["matchNotes"],
    "challengeNotes" :parsed_data["jobNotes"],
    "jobId" :jobObject["_id"]
  }



# get_notes("", "", "")