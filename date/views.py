from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from django.template import RequestContext
from django import forms
from models import KMX
from apscheduler.scheduler import Scheduler
#from models import User
def index(request):
    return render(request,"login.html")

