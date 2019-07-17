from django.urls import path
from . import views

urlpatterns = [
    path("contest", views.contest, name="contest" ),
    path("dash", views.dash, name="dash" ),
    path("faqs", views.faqs, name="faqs" ),
]    

