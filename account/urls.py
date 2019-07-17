from django.urls import path
from . import views

urlpatterns = [

    path("login", views.login, name="login" ),
    path('logout',views.logout, name="logout"),
    path("contest", views.contest, name="contest" ),
    path("dash", views.dash, name="dash" ),
    path("faqs",views.faqs,name="faqs")
    
    
]