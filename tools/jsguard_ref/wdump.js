// Dump the internal `w` (a5 plaintext) by instrumented module.
require(__dirname + '/wx_shim.js');
const fs = require('fs');
const req = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
if (req.frozenTime) {
  const RealDate = Date, FIXED = req.frozenTime;
  global.Date = class extends RealDate {
    constructor(...a) { if (a.length === 0) super(FIXED); else super(...a); }
    static now() { return FIXED; }
  };
}
const load = require(__dirname + '/loader.js');
const jg = load('utils/jsguard.js');
const inst = jg.initSync({ appid: req.appid || 'wx2c348cf579062e56' });
const out = inst.sign({ url: req.url, method: req.method || 'POST', header: req.header || {}, data: req.data || {} }, true);
const sig = JSON.parse(out.header.mtgsig);
process.stdout.write(JSON.stringify({ a5: sig.a5, a4: sig.a4, d1: sig.d1, a2: sig.a2, a3: sig.a3, a6: sig.a6, In: jg.__dump().In, Dn: jg.__dump().Dn }, null, 2));
