# Generated by Django 2.2.3 on 2019-07-12 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('loan', models.CharField(max_length=100)),
                ('img', models.ImageField(upload_to='pics')),
                ('pay', models.BooleanField(default=False)),
            ],
        ),
    ]
