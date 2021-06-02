from django.db import models


class Customers(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField(default=0, editable=True)
    SEX = (("Male", "male"),
           ("Female", "female"))
    sex = models.CharField(choices=SEX, max_length=100)
    state = models.CharField(max_length=100, default=False)
    region = models.CharField(max_length=100, default=False)
    zip = models.CharField(max_length=20, default=False)
    Churn_prediction = (("Loyal", "Loyal"), ("to be churned",
                        "To Be Churned"), ("churned", "Churned"))
    Churn = models.CharField(choices=Churn_prediction,
                             max_length=100, default=Churn_prediction[0])

    created_at = models.DateTimeField(auto_now_add=True)


class KPIs(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)


class Goals(models.Model):
    name = models.CharField(max_length=200)
