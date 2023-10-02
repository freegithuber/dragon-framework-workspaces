# !/usr/bin/python

# -*- coding: UTF-8 -*-

from web.commons.common_return import CommonReturn


def index_data():
    return CommonReturn.success('执行成功', '返回测试数据！')
