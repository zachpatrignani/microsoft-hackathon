
from models.jobs_model import  JobWorkType, JobEmploymentType
from datetime import datetime
import dal.queries
import json

def get_all_jobs(query):
    converted_query = {}
    converted_query['limit'] = int(query.get('limit', 30))
    converted_query['page'] = int(query.get('page', 1))
    converted_query['filters'] = json.loads(query.get('filters', '{}')) or {}
    print(converted_query)
    jobs = dal.queries.get_all_jobs(converted_query)
    for job in jobs:
        job['_id'] = str(job['_id'])
    print(jobs)
    return jobs



def get_jobs_with_limit(limit):

    jobObject =  dal.queries.get_jobs_with_limit(limit)
    for job in jobObject:
        job['_id'] = str(job['_id'])

    print(jobObject)
    
    return jobObject
    



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

        # return jobs.add_job(new_job).inserted_id