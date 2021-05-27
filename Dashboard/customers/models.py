from django.db import models


class Customers(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)


class KPIs(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)


class Goals(models.Model):
    name = models.CharField(max_length=200)
