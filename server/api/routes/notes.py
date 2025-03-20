from flask import Blueprint, request
from api.controllers import notes_controller
notes_api = Blueprint('relases2', __name__, url_prefix='/server/api/notes')


@notes_api.route('', methods=['GET'])
def get_notes():
    preferences = request.args.get('preferences', default="", type=str)  # Default limit is 10 if not provided
    impairments = request.args.get('impairments', default="", type=str)  # Default limit is 10 if not provided
    jobId = request.args.get('jobId', default="", type=str)  # Default limit is 10 if not provided
    return notes_controller.get_notes(preferences, impairments, jobId)


