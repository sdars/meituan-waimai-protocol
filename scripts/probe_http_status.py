import sys
sys.path.insert(0,'/root/YYB/pcyyb/protocol')
sys.path.insert(0,'/root/YYB/qqfarm/src')
sys.path.insert(0,'/root/YYB/meituan-waimai/src')
from session_keepalive import SessionStore
from qqfarm import getNativeWxLoginCode
from meituan_waimai import LoginConfig, Signer
from meituan_waimai.login import _z, PATHS
from urllib.parse import quote
import requests
ACCT='/root/YYB/pcyyb/protocol/accounts/owNAX6txE4vcGLryGW-ptHb5JrcY.json'
WX='wx2c348cf579062e56'
st=SessionStore.load(ACCT)
if st.need_refresh(): st.refresh()
buf=st.authorize_buffer()['raw']
cfg=LoginConfig(app_name='waimai', app_id=WX, risk_app=4, risk_platform=13, risk_partner=4,
                token_id='3agGXN9HaNKUsu64l_alrw', joinkey='100432_1577962114',
                sdk_version='6.18.2', version_name='15.15.15',
                platform='windows', model='PC', wx_version='3.9.12', env='prod')
sg=Signer(app_id=WX)
http=requests.Session()
def do(name,path,data):
    url=_z('https://'+cfg.domain+path,cfg)
    body=dict(data); body['device_type']=cfg.model; body['device_os']='微信小程序'
    hdr={'content-type':'application/x-www-form-urlencoded'}
    s=sg.sign('POST',url,body,hdr)
    payload='&'.join('%s=%s'%(quote(str(k),safe=''),quote(str(v),safe='')) for k,v in s['data'].items())
    r=http.request('POST',s['url'],headers=s['header'],data=payload)
    print('[%s] HTTP %s | ct=%s | server=%s'%(name,r.status_code,r.headers.get('content-type'),r.headers.get('server')))
    print('   body:',r.text[:300].replace('\n',' '))
code1=getNativeWxLoginCode(buf,WX)
do('getwxinfo',PATHS['getwxinfo'],{'code':code1,'appName':'waimai'})
code2=getNativeWxLoginCode(buf,WX)
do('silent',PATHS['wxslientlogin'],{'wechatFingerprint':'WX__ver1.2.0_TEST','code':code2})
code3=getNativeWxLoginCode(buf,WX)
do('silent2',PATHS['wxslientlogin'],{'wechatFingerprint':'WX__ver1.2.0_TEST','code':code3})
