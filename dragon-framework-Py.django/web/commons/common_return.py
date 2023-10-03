# !/usr/bin/python

# -*- coding: UTF-8 -*-

from django.http import JsonResponse


class CommonReturn(object):

    def __init__(self, state, message, value) -> None:
        self.state = state
        self.message = message
        self.value = value

    def to_dict(self):
        return {'state': self.state, 'message': self.message, 'value': self.value}
        pass

    def to_json_response(self):
        return JsonResponse(self.to_dict(), json_dumps_params={'ensure_ascii': False})
        pass

    @staticmethod
    def success_code():
        return 1

    @staticmethod
    def failure_code():
        return 0

    @staticmethod
    def success(message=None, value=None):
        return CommonReturn(CommonReturn.success_code(), message, value)
        pass

    @staticmethod
    def failure(message=None, value=None):
        return CommonReturn(CommonReturn.failure_code(), message, value)
        pass
