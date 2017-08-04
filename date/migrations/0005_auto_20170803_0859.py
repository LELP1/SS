# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('date', '0004_auto_20170803_0853'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kmx',
            name='dataCount',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='kmx',
            name='expectedDataCount',
            field=models.CharField(max_length=20),
        ),
    ]
