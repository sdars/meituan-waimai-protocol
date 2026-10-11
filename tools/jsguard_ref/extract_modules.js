// Extract every define("name", function(...){BODY}) module from a wxapkg app-service.js
// into individual files so they can be require()'d by loader.js.
// Usage: node extract_modules.js <app-service.js> <outdir>
const fs = require('fs');
const path = require('path');
const srcPath = process.argv[2];
const outDir = process.argv[3];
const src = fs.readFileSync(srcPath, 'utf8');
const re = /define\("([^"]+)",function\(/g;
let m;
let count = 0;
fs.mkdirSync(outDir, { recursive: true });
while ((m = re.exec(src))) {
  const name = m[1];
  const p = src.indexOf('){', m.index + 8);
  const bodyStart = src.indexOf('{', p);
  let depth = 0, j = bodyStart;
  for (; j < src.length; j++) {
    const c = src[j];
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) break; }
  }
  fs.writeFileSync(path.join(outDir, name.replace(/[\/]/g, '__') + '.js'), src.slice(bodyStart + 1, j));
  count++;
}
console.log('extracted ' + count + ' modules to ' + outDir);
