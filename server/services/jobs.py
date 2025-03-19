
from models.jobs_model import  JobWorkType, JobEmploymentType
from datetime import datetime

jobs = []

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

def add_job(data):
        new_job = {
            'name': data['name'],
            'industry': data['industry'],
            'tags': data.get('tags', []),
            'description': data['description'],
            'location': data['location'],
            '_createdAt': str(datetime.now()),
            'employmentType': data['employmentType'],
            'wage': data['wage'],
            'workType': data['workType'],
            'employerId': data['employerId']
        }

        jobs.append(new_job)

        return jsonify({'message': 'Job added successfully', 'job': new_job}), 201