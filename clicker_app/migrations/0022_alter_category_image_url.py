# Generated by Django 5.0.6 on 2024-12-09 05:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clicker_app', '0021_contact_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='image_url',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
