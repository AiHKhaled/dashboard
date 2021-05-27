from django.db.models import query
from django.shortcuts import render
from rest_framework import generics
from .models import Customers, KPIs, Goals
from .serializers import CustomersSerializer, KPISerializer, GoalsSerializer


class CustomersListCreate(generics.ListCreateAPIView):
    queryset = Customers.objects.all()
    serializer_class = CustomersSerializer


class KPIListCreate(generics.ListCreateAPIView):
    queryset = KPIs.objects.all()
    serializer_class = KPISerializer


class GoalsListCreate(generics.ListCreateAPIView):
    queryset = Goals.objects.all()
    serializer_class = GoalsSerializer
