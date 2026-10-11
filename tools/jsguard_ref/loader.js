const fs=require('fs'),vm=require('vm'),path=require('path');
// 模块目录：优先 JSGUARD_MOD_DIR，其次默认 /tmp/jg/mod/
const MOD=(process.env.JSGUARD_MOD_DIR||'/tmp/jg/mod/').replace(/\/?$/,'/');
const cache={};
function load(name){
  if(cache[name])return cache[name].exports;
  const file=MOD+name.replace(/[\/]/g,'__')+'.js';
  const body=fs.readFileSync(file,'utf8');
  const module={exports:{}};
  cache[name]=module;
  function require(dep){
    // resolve relative
    let d=dep;
    if(dep.startsWith('.')){
      d=path.posix.normalize(path.posix.join(path.posix.dirname(name),dep));
      if(d.endsWith('.js'))d=d.slice(0,-3);
    }
    // try candidates
    const cands=[d,d+'.js'];
    for(const c of cands){ if(fs.existsSync(MOD+c.replace(/[\/]/g,'__')+'.js')) return load(c); }
    throw new Error('cannot resolve '+dep+' from '+name);
  }
  const fn=new Function('require','module','exports',body);
  fn(require,module,module.exports);
  return module.exports;
}
global.__load=load;
module.exports=load;
