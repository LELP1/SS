# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('date', '0002_auto_20170727_0333'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kmx',
            name='fieldGroupId',
            field=models.CharField(max_length=50),
        ),
    ]
