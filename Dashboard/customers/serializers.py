from rest_framework import serializers
from .models import Customers, KPIs, Goals


class CustomersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customers
        fields = "__all__"


class KPISerializer(serializers.ModelSerializer):
    class Meta:
        model = KPIs
        fields = "__all__"


class GoalsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goals
        fields = "__all__"
