# Generated by Django 3.2.3 on 2021-05-31 09:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0005_alter_customers_age'),
    ]

    operations = [
        migrations.AddField(
            model_name='customers',
            name='region',
            field=models.CharField(default=False, max_length=100),
        ),
        migrations.AddField(
            model_name='customers',
            name='sex',
            field=models.BooleanField(default=0),
        ),
        migrations.AddField(
            model_name='customers',
            name='state',
            field=models.CharField(default=False, max_length=100),
        ),
        migrations.AddField(
            model_name='customers',
            name='zip',
            field=models.CharField(default=False, max_length=20),
        ),
    ]
