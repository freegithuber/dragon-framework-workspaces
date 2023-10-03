from django.urls import path

from . import views

urlpatterns = [
    path("", views.root, name="root"),
    path("index/", views.index, name="index"),
    path("index/data/", views.index_data, name="index_data"),
]
