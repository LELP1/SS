from django.db import models
class   KMX(models.Model):
        fieldGroupId=models.CharField(max_length=50)
        expectedDataCount=models.CharField(max_length=20)
        wfCount=models.IntegerField()
        dataCount=models.CharField(max_length=20)
        size=models.CharField(max_length=20)
        missRate=models.FloatField()
#        objects=models.Manager()
        def __unicode__(self):
            return unicode(self.fieldGroupId)