# Generated by Django 5.0.6 on 2024-11-25 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clicker_app', '0016_blog_subtitle'),
    ]

    operations = [
        migrations.AddField(
            model_name='affiliatelink',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='blog_images/'),
        ),
        migrations.AddField(
            model_name='categoryfeature',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='blog_images/'),
        ),
    ]
