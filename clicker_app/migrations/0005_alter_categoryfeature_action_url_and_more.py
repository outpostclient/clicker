# Generated by Django 5.0.6 on 2024-06-26 05:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clicker_app', '0004_alter_categoryfeature_action_url_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='categoryfeature',
            name='action_url',
            field=models.URLField(max_length=500),
        ),
        migrations.AlterField(
            model_name='categoryfeature',
            name='cons',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='categoryfeature',
            name='description',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='categoryfeature',
            name='detail_description',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='categoryfeature',
            name='logo',
            field=models.URLField(max_length=500),
        ),
        migrations.AlterField(
            model_name='categoryfeature',
            name='pros',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='categoryfeature',
            name='rating',
            field=models.DecimalField(decimal_places=2, max_digits=3),
        ),
        migrations.AlterField(
            model_name='categoryfeature',
            name='review',
            field=models.PositiveIntegerField(),
        ),
    ]
