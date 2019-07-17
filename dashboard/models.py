from django.db import models

# Create your models here.
class Customers(models.Model):
    name = models.CharField(max_length = 100)
    loan = models.CharField(max_length = 100)
    img  = models.ImageField(upload_to='pics')
    pay = models.BooleanField(default=False)
    points = models.IntegerField()
    due = models.IntegerField()
    username = models.CharField(max_length= 100)
    password = models.CharField(max_length=100)