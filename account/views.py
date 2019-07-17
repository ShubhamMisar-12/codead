from django.shortcuts import render,redirect
from django.contrib.auth.models import auth
from dashboard.models import Customers
from django.contrib import messages
# Create your views here.
cust = Customers.objects.all()
def logout(request):
    auth.logout(request)
    return('/')
def faqs(request):
    return render(request,"faqs.html")

def dash(request):
    return render(request,"user.html")
def contest(request):
    return render(request,"contest.html")    
def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password= request.POST['password']
        cust = auth.authenticate(username=username,password=password)
        if cust is not None:
            auth.login(request,cust)
            return redirect("/")
        else:
            messages.info(request,'Invalid Credentials')
            return redirect('dash')
    else:
        return render(request,'login.html')