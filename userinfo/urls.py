from django.conf.urls import include, url
from django.contrib import admin
from userinfo import views
urlpatterns=[
    url(r'^$',views.login),

]
