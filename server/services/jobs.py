
from models.jobs_model import  JobWorkType, JobEmploymentType
from datetime import datetime
import dal.queries
import json
from dal import queries

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
    data['_createdAt'] = datetime.now().strftime('%m-%d-%Y')

    return queries.add_job(data)