import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

COSMOS_DB_URI = os.getenv("COSMOS_DB_URI")
DATABASE_NAME = os.getenv("DATABASE_NAME")

# Initialize the MongoClient
client = MongoClient(COSMOS_DB_URI)

# Access the database
db = client[DATABASE_NAME]

# Access collections
jobs_collection = db["Jobs"]
users_collection = db["Users"]
coach_collection = db["Coach"]
clients_collection = db["Clients"]

