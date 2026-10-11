// Reference implementation: load the real jsguard module and sign a request.
// Usage: node sign_cli.js <request.json>
// request.json: {url, method, header, data, appid?, frozenTime?}
require(__dirname + '/wx_shim.js');
const fs = require('fs');
const file = process.argv[2];
const req = JSON.parse(fs.readFileSync(file, 'utf8'));
if (req.frozenTime) {
  const RealDate = Date;
  const FIXED = req.frozenTime;
  global.Date = class extends RealDate {
    constructor(...a) { if (a.length === 0) super(FIXED); else super(...a); }
    static now() { return FIXED; }
  };
}
const load = require(__dirname + '/loader.js');
const jg = load('utils/jsguard.js');
const inst = jg.initSync({ appid: req.appid || 'wx2c348cf579062e56' });
const out = inst.sign({ url: req.url, method: req.method || 'POST', header: req.header || {}, data: req.data || {} }, true);
process.stdout.write(JSON.stringify({ mtgsig: out.header.mtgsig, dfpid: inst.finger.d() }));
