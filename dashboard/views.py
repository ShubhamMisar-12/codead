from django.shortcuts import render
from dashboard.models import Customers

# Create your views here.
def dash(request):
    cust = Customers.objects.all()
     
    return render(request,"user.html")
def contest(request):
    return render(request,"contest.html")

def faqs(request):
    return render(request,"faqs.html")