# Generated by Django 5.0.6 on 2024-06-29 17:04

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clicker_app', '0014_category_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='date_created',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
