#!/usr/bin/python

# -*- coding: UTF-8 -*-

########################################################################################################################
# Flask 项目入口文件，默认指向 wsgi.py 或 app.py 可以通过设置 FLASK_APP 环境变量修改
#
# 启动命令如下：
#    set FLASK_APP=main
#    flask run --host=0.0.0.0 --port=8080
#
########################################################################################################################

import flask

from web.index import registry as index_registry

webapp = flask.Flask(__name__, static_folder='../static', template_folder='../templates')

webapp.config['JSON_AS_ASCII'] = False

index_registry.register_to(webapp)


@webapp.route(rule='/', methods=['GET'])
def root():
    return flask.redirect('/index')


@webapp.route(rule='/welcome', methods=['GET'])
def welcome():
    return 'Welcome to Flask !!!'


def run(): webapp.run(host='0.0.0.0', port=8080, debug=True)


if '__main__' == __name__:
    run()
