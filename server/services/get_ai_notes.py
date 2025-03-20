import os


def get_notes(preferenes, impairments, jobId):
  return {
    "matchNotes" :[preferenes],
    "challengeNotes" :[impairments],
    "jobId" :jobId
  }