# Generated by Django 2.2.3 on 2019-07-12 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customers',
            name='password',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customers',
            name='username',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
    ]
