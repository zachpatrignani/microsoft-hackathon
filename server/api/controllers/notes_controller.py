from os import error
from services import get_ai_notes
from dal import queries
from flask import request
import api.common.http_responses as response
import logging

log = logging.getLogger()

def get_notes(preferences, impairments, jobObject):
    try:
        return response.success(get_ai_notes.get_notes(preferences, impairments, jobObject))
    except Exception as e:
        error_msg = f'Failed to get jobs: {str(e)}'
        log.error(error_msg)
        return response.error(500, error_msg);