// Produce golden signing samples using the real jsguard module.
// Usage: node golden.js <cases.json>
// Each case: {url, method, header, data, appid?, frozenTime?, openId?}
require(__dirname + '/wx_shim.js');
const fs = require('fs');

const cases = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

function runCase(c) {
  // fresh module instance per case
  delete require.cache[require.resolve(__dirname + '/loader.js')];
  const load = require(__dirname + '/loader.js');
  const jg = load('utils/jsguard.js');
  const inst = jg.initSync({ appid: c.appid || 'wx2c348cf579062e56' });
  const out = inst.sign({ url: c.url, method: c.method || 'POST', header: c.header || {}, data: c.data || {} }, true);
  const dump = jg.__dump ? jg.__dump() : {};
  return {
    case: c,
    mtgsig: out.header.mtgsig,
    In: dump.In,
    Dn: dump.Dn,
    Un: dump.Un,
    Kn: dump.Kn,
    Vn: dump.Vn,
    Hn: dump.Hn,
    Wn: dump.Wn,
  };
}

const results = [];
for (const c of cases) {
  if (c.frozenTime) {
    const RealDate = Date, FIXED = c.frozenTime;
    global.Date = class extends RealDate {
      constructor(...a) { if (a.length === 0) super(FIXED); else super(...a); }
      static now() { return FIXED; }
    };
  } else {
    delete global.Date;
  }
  results.push(runCase(c));
}
process.stdout.write(JSON.stringify(results, null, 2));
