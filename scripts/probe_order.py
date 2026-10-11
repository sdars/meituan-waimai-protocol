import sys, json
sys.path.insert(0,'/root/YYB/pcyyb/protocol')
sys.path.insert(0,'/root/YYB/qqfarm/src')
sys.path.insert(0,'/root/YYB/meituan-waimai/src')
from session_keepalive import SessionStore
from qqfarm import getNativeWxLoginCode
from meituan_waimai import LoginClient, LoginConfig, Signer
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
sg=Signer(app_id=WX); http=requests.Session()
def post(path,data):
    url=_z('https://'+cfg.domain+path,cfg)
    body=dict(data); body['device_type']=cfg.model; body['device_os']='微信小程序'
    s=sg.sign('POST',url,body,{'content-type':'application/x-www-form-urlencoded'})
    payload='&'.join('%s=%s'%(quote(str(k),safe=''),quote(str(v),safe='')) for k,v in s['data'].items())
    return http.request('POST',s['url'],headers=s['header'],data=payload)
# step1: getWxIds
c1=getNativeWxLoginCode(buf,WX)
r1=post(PATHS['getwxinfo'],{'code':c1,'appName':'waimai'}); print('getwxinfo HTTP',r1.status_code, 'openid?' , '"openid"' in r1.text or 'openidCipher' in r1.text)
# step2: silent with fake fp
c2=getNativeWxLoginCode(buf,WX)
r2=post(PATHS['wxslientlogin'],{'wechatFingerprint':'WX__ver1.2.0_TEST','code':c2})
j=r2.json(); print('silent HTTP',r2.status_code,'error=',j.get('error'),'token?', bool((j.get('data') or {}).get('token')))
print(json.dumps(j,ensure_ascii=False)[:300])
