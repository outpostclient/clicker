# Generated by Django 5.0.6 on 2024-06-26 09:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clicker_app', '0007_blog_orderby'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='blog_images/'),
        ),
        migrations.AddField(
            model_name='blog',
            name='image_url',
            field=models.URLField(blank=True, max_length=500, null=True),
        ),
    ]
