# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('date', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='KMX',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('fieldGroupId', models.IntegerField()),
                ('expectedDataCount', models.IntegerField()),
                ('wfCount', models.IntegerField()),
                ('dataCount', models.BigIntegerField()),
                ('size', models.IntegerField()),
                ('missRate', models.FloatField()),
            ],
        ),
        migrations.DeleteModel(
            name='post',
        ),
    ]
