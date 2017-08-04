import urllib2
import json
from views import KMX
def dataInsql():
    address=['gw_scada_7s','gw_cms_20ms','gw_wtg_20ms','gw_wtg_1s','gw_wtg_1min','gw_wtg_10min']
    for add in address:
        souceurl='http://10.1.235.9:19080/datastat/count?fieldGroupId='+add+'&startTime=2014-01-01&endTime=2017-07-05'
        dates=urllib2.urlopen(souceurl).read()
        j=json.loads(dates)
        KMX.objects.filter(fieldGroupId=add).update(expectedDataCount=j['body']['expectedDataCount'],wfCount=j['body']['wfCount'],dataCount=j['body']['dataCount'],size=j['body']['size'],missRate=j['body']['missRate'])
        print '刷新了，ye'
