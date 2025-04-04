from os import error
from services import jobs
from dal import queries
from flask import request
import api.common.http_responses as response
import logging
import services.jobs as jobs

log = logging.getLogger()

def get_all_jobs():
    try:
        _jobs, count = jobs.get_all_jobs(request.args)
        return response.success({'jobs': _jobs, 'count': count})
    except Exception as e:
        error_msg = f'Failed to get jobs: {str(e)}'
        log.error(error_msg)
        return response.error(500, error_msg)

def get_jobs_with_limit(limit):
    try:
        return response.success(jobs.get_jobs_with_limit(limit))
    except Exception as e:
        error_msg = f'Failed to get jobs: {str(e)}'
        log.error(error_msg)
        return response.error(500, error_msg)

def add_job():
    try:
        data = request.get_json()
        return response.success(jobs.add_job(data))
    except Exception as e:
        error_msg = f'Failed to get jobs: {str(e)}'
        log.error(error_msg)
        return response.error(500, error_msg)