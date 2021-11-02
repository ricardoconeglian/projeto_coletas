from django.conf.urls import url
from EmployeeApp import views

urlpatterns=[
    url(r'^coleta$', views.coletaApi),
    url(r'^create$', views.create),
    url(r'^coleta/([0-9]+)$', views.coletaApi)
]