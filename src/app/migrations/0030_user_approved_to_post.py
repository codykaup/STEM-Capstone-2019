# Generated by Django 2.1.7 on 2019-04-21 16:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0029_auto_20190416_0842'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='approved_to_post',
            field=models.BooleanField(default=False),
        ),
    ]
