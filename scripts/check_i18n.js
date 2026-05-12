const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const enPath = path.join(root, 'messages', 'en.json');
let en = {};
try { en = JSON.parse(fs.readFileSync(enPath, 'utf8')); } catch (e) { console.error('Failed to read en.json:', e.message); process.exit(2); }

function walk(dir, files=[]) {
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, files);
    else if (/\.tsx?$/.test(full)) files.push(full);
  });
  return files;
}

const src = path.join(root, 'src');
const files = walk(src);
const keyRegex = /t\(\s*"([^"]+)"\s*\)/g;
const keys = new Set();
files.forEach(fp => {
  const text = fs.readFileSync(fp, 'utf8');
  let m; while ((m = keyRegex.exec(text)) !== null) keys.add(m[1]);
});

function getValue(obj, pathArr) {
  let cur = obj;
  for (const p of pathArr) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

const missing = [];
const presentButNotString = [];
keys.forEach(k => {
  const pathArr = k.split('.');
  const val = getValue(en, pathArr);
  if (val === undefined) missing.push(k);
  else if (typeof val !== 'string' && !Array.isArray(val)) presentButNotString.push(k);
});

console.log('Scanned files:', files.length);
console.log('Found translation keys used:', keys.size);
console.log('\nMissing keys ('+missing.length+'):');
missing.forEach(k => console.log('  ', k));
console.log('\nPresent but non-string values ('+presentButNotString.length+'):');
presentButNotString.forEach(k => console.log('  ', k));

if (missing.length === 0) process.exit(0);
process.exit(1);
