import sys
sys.path.insert(0,'/root/YYB/pcyyb/protocol')
sys.path.insert(0,'/root/YYB/qqfarm/src')
sys.path.insert(0,'/root/YYB/meituan-waimai/src')
from session_keepalive import SessionStore
from qqfarm import getNativeWxLoginCode
from meituan_waimai import LoginClient, LoginConfig, Signer
ACCT='/root/YYB/pcyyb/protocol/accounts/owNAX6txE4vcGLryGW-ptHb5JrcY.json'
WX='wx2c348cf579062e56'
st=SessionStore.load(ACCT)
if st.need_refresh(): st.refresh()
code=getNativeWxLoginCode(st.authorize_buffer()['raw'], WX)
print('[code]', code)
cfg=LoginConfig(app_name='waimai', app_id=WX, risk_app=4, risk_platform=13, risk_partner=4,
                token_id='3agGXN9HaNKUsu64l_alrw', joinkey='100432_1577962114',
                sdk_version='6.18.2', version_name='15.15.15',
                platform='windows', model='PC', wx_version='3.9.12', env='prod')
c=LoginClient(cfg=cfg, signer=Signer(app_id=WX))
fp=c.build_wechat_fingerprint()
try:
    ids=c.get_wx_ids(code); print('[getWxIds] OK:', ids)
except Exception as e:
    print('[getWxIds] ERR:', e)
try:
    r=c.silent_login(code, fp)
    print('[silentLogin] keys:', list(r.keys()))
    print('[silentLogin] token?', bool(r.get('token')), 'userId?', r.get('userId'))
    print('[auth]', c.auth)
except Exception as e:
    print('[silentLogin] ERR:', e)
