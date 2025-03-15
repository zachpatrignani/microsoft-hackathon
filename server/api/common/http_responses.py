from flask import Response
import json

def success(data):
    return Response(
        json.dumps({'data': data, 'success': True}),
        status=200,
        content_type='application/json'
    )

def error(status, description):
    return Response(
        json.dumps({'description': description, 'success': False}),
        status=status,
        content_type='application/json'
    )
