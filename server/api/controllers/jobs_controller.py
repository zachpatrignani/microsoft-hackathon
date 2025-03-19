from os import error
from services import jobs
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

def add_job():
    try:
        data = request.get_json()

        required_fields = ['name', 'company', 'industry', 'description', 'skills', 'responsibilities', 'city', 'state', 'employmentType', 'wage', 'workType', 'website', 'email', 'phone']

        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400

        return response.success(jobs.add_job(data))

    except Exception as e:
        return jsonify({'error': str(e)}), 500