from os import error
from services import jobs
from dal import queries
import api.common.http_responses as response
import logging

log = logging.getLogger()

def get_all_jobs():
    try:
        return response.success(jobs.get_all_jobs())
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
