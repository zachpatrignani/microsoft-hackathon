
from models.jobs_model import  JobWorkType, JobEmploymentType
from datetime import datetime
import dal.queries
from flask import jsonify

def get_all_jobs():
    return {
        'name': 'test_job',
        'industry': 'industry',
        'tags' : ['tag1', 'tag2'],
        'description': 'description',
        'location': 'Michigan',
        '_createdAt': str(datetime.now()),
        'employmentType': JobEmploymentType.FULL_TIME,
        'wage': 100000.0,
        'workType': JobWorkType.REMOTE,
        'employerId': '12345'
    }


def get_jobs_with_limit(limit):

    jobObject =  dal.queries.get_jobs_with_limit(limit)
    for job in jobObject:
        job['_id'] = str(job['_id'])

    return jobObject
    


