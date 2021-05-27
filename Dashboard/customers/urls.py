from django.urls import path, include
from . import views

urlpatterns = [
    path('api/customers/', views.CustomersListCreate.as_view()),
    path('api/KPIs/', views.KPIListCreate.as_view()),
    path('api/Goals/', views.GoalsListCreate.as_view())

]
