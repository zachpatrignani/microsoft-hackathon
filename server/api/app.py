from flask_cors import cross_origin
from flask import Flask, request
from waitress import serve
import logging
from api.routes.jobs import jobs_api

log = logging.getLogger(__name__)

app = Flask(__name__)
app.url_map.strict_slashes = False
app.register_blueprint(jobs_api)

def init():
    serve(app, host='0.0.0.0', port=8000)
    log.info('Starting Server...')

@app.before_request
def before_request():
    log.info('%s %s %s', request.method, request.full_path, request.get_json(force=True, silent=True))
