from django.shortcuts import render,render_to_response
from django.http import HttpResponse,HttpResponseRedirect
from django.template import RequestContext
from django import forms
from models import UserInfo
from django.contrib import auth
def login(request):
     print (request.method)
     if request.method=='POST':
        username=request.POST.get('username','')
        password=request.POST.get('password','')
        user=auth.authenticate(username=username,password=password)
        if user and user.is_active:
             auth.login(request,user)
             return HttpResponse('success')
        else:
            return HttpResponse('error')
     #print request
     return render(request,'login.html')
def index(request):
    return render(request,'index.html')
def lelp(request):
    if request.method=='GET':
        print 'GET'
    else:
        print 'POST'
    return HttpResponse('Hello Wold')