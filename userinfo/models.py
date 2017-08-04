from django.db import models
class   UserInfo(models.Model):
        userName=models.CharField(max_length=30)
        passWord=models.CharField(max_length=30)
        objects=models.Manager
        index=models.IntegerField()
        def __unicode__(self):
                return self.userName