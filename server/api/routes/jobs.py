from flask import Blueprint
from api.controllers import jobs_controller
jobs_api = Blueprint('relases', __name__, url_prefix='/server/api/jobs')

@jobs_api.route('', methods=['GET'])
def get_all_jobs():
   return jobs_controller.get_all_jobs()
