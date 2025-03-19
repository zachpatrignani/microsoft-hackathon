from flask import Blueprint, request
from api.controllers import jobs_controller
jobs_api = Blueprint('relases', __name__, url_prefix='/server/api/jobs')

@jobs_api.route('', methods=['GET'])
def get_all_jobs():
   return jobs_controller.get_all_jobs()


@jobs_api.route('/getJobsWithLimit', methods=['GET'])
def get_all_jobs_with_limit():
    limit = request.args.get('limit', default=300, type=int)  # Default limit is 10 if not provided
    return jobs_controller.get_jobs_with_limit(limit)


