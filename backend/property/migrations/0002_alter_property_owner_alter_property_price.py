# Generated by Django 4.2.2 on 2023-06-23 11:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('property', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='property',
            name='owner',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='property',
            name='price',
            field=models.CharField(max_length=200),
        ),
    ]
