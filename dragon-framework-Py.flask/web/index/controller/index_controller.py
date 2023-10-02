# !/usr/bin/python

# -*- coding: UTF-8 -*-

import flask

from web.index.service import index_service

blueprint = flask.Blueprint('index_blueprint', __name__)


@blueprint.route(rule='/index', methods=['GET'])
def index():
    return flask.render_template('index.html')
    pass


@blueprint.route(rule='/index/data', methods=['GET'])
def index_data():
    return index_service.index_data().to_dict()
    pass
