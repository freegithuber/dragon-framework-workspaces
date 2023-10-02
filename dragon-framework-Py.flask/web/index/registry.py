# !/usr/bin/python

# -*- coding: UTF-8 -*-

from web.index.controller import index_controller


def register_to(webapp):
    webapp.register_blueprint(index_controller.blueprint)
    pass
