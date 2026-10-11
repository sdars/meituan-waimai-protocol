// Dump intermediate signing values using the instrumented module dir.
// Usage: JSGUARD_MOD_DIR=/tmp/jg/moddbg node dump_cli.js <request.json>
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
const dump = {};
global.__DUMP = function (o) {
  dump.m = o.m;
  dump.w = o.w;
  dump.w_type = Array.isArray(o.w) ? 'array' : typeof o.w;
  dump.z_len = o.z && o.z.length;
  dump.x = o.x >>> 0;
  dump.y = Array.from(o.y);
  dump.s = o.s;
  dump.o = o.o;
  dump.In = o.In;
  dump.Un_len = o.Un ? o.Un.length : 0;
  dump.Un = o.Un;
};
const load = require(__dirname + '/loader.js');
const jg = load('utils/jsguard.js');
const inst = jg.initSync({ appid: req.appid || 'wx2c348cf579062e56' });
const out = inst.sign({ url: req.url, method: req.method || 'POST', header: req.header || {}, data: req.data || {} }, true);
dump.mtgsig = out.header.mtgsig;
process.stdout.write(JSON.stringify(dump, null, 2));
