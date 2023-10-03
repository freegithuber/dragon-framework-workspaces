from django.shortcuts import render, redirect

from web.commons.common_return import CommonReturn


# Create your views here.


def root(request):
    return redirect('/index')
    pass


def index(request):
    return render(request, "index/index.html", {})
    pass


def index_data(request):
    return CommonReturn.success('执行成功', '返回测试数据！').to_json_response()
    pass
