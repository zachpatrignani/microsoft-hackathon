
from models.jobs_model import  JobWorkType, JobEmploymentType
from datetime import datetime

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
