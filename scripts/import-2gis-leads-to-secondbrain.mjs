#!/usr/bin/env node
// Lightweight bridge: 2GIS leads (JSONL) -> acedia `second_brain.db`.companies
// Schema-adaptive: introspects `companies` columns so it won't break on schema drift,
// and adapts the upsert strategy to whatever columns actually exist.
// Usage:
//   SECOND_BRAIN_DB=/root/.hermes/data/second_brain.db \
//     node scripts/import-2gis-leads-to-secondbrain.mjs data/kz-leads-almaty-2026-08-06.jsonl
import Database from 'better-sqlite3';
import fs from 'fs';

const dbPath = process.env.SECOND_BRAIN_DB || '/root/.hermes/data/second_brain.db';
const file = process.argv[2];
if (!file) { console.error('usage: node import-2gis-leads-to-secondbrain.mjs <leads.jsonl>'); process.exit(2); }
if (!fs.existsSync(file)) { console.error(`not found: ${file}`); process.exit(2); }
if (!fs.existsSync(dbPath)) { console.error(`not found: ${dbPath}`); process.exit(2); }

const db = new Database(dbPath);
const cols = db.prepare('PRAGMA table_info(companies)').all().map(c => c.name);
const have = c => cols.includes(c);
const pick = fields => Object.fromEntries(Object.entries(fields).filter(([k]) => have(k)));

// Determine upsert capability: prefer (source,source_id) conflict; else insert-or-ignore on source_id; else plain insert.
const canUpsert = have('source') && have('source_id');
const canIgnore = have('source_id');

let upsert, colsUsed;
if (canUpsert) {
  const fields = pick({ name:'name', source:'2gis', source_id:'', url:'', address:'', city:'', phone:'', updated_at:new Date().toISOString() });
  const cs = Object.keys(fields);
  upsert = db.prepare(`
    INSERT INTO companies (${cs.map(c=>`"${c}"`).join(',')})
    VALUES (${cs.map(()=>'?').join(',')})
    ON CONFLICT(source,source_id) DO UPDATE SET
      name=excluded.name, url=excluded.url, address=excluded.address,
      city=excluded.city, phone=excluded.phone, updated_at=excluded.updated_at
  `);
} else if (canIgnore) {
  const fields = pick({ name:'name', source:'2gis', source_id:'', url:'', address:'', city:'', phone:'', updated_at:new Date().toISOString() });
  const cs = Object.keys(fields);
  upsert = db.prepare(`
    INSERT OR IGNORE INTO companies (${cs.map(c=>`"${c}"`).join(',')}) VALUES (${cs.map(()=>'?').join(',')})
  `);
} else {
  const fields = pick({ name:'name', source:'2gis', source_id:'', url:'', address:'', city:'', phone:'', updated_at:new Date().toISOString() });
  const cs = Object.keys(fields);
  upsert = db.prepare(`INSERT INTO companies (${cs.map(c=>`"${c}"`).join(',')}) VALUES (${cs.map(()=>'?').join(',')})`);
}

const cs = Object.keys(fields);
  colsUsed = cs;
  upsert = db.prepare(`
    INSERT INTO companies (${cs.map(c=>`"${c}"`).join(',')})
    VALUES (${cs.map(()=>'?').join(',')})
    ON CONFLICT(source,source_id) DO UPDATE SET
      name=excluded.name, url=excluded.url, address=excluded.address,
      city=excluded.city, phone=excluded.phone, updated_at=excluded.updated_at
  `);
} else if (canIgnore) {
  const fields = pick({ name:'name', source:'2gis', source_id:'', url:'', address:'', city:'', phone:'', updated_at:new Date().toISOString() });
  const cs = Object.keys(fields);
  colsUsed = cs;
  upsert = db.prepare(`INSERT OR IGNORE INTO companies (${cs.map(c=>`"${c}"`).join(',')}) VALUES (${cs.map(()=>'?').join(',')})`);
} else {
  const fields = pick({ name:'name', source:'2gis', source_id:'', url:'', address:'', city:'', phone:'', updated_at:new Date().toISOString() });
  const cs = Object.keys(fields);
  colsUsed = cs;
  upsert = db.prepare(`INSERT INTO companies (${cs.map(c=>`"${c}"`).join(',')}) VALUES (${cs.map(()=>'?').join(',')})`);
}

let n = 0, skipped = 0, dup = 0;
const tx = db.transaction((rows) => {
  for (const r of rows) {
    const row = pick({
      name: r.name || '', source: '2gis', source_id: String(r.firm_id || ''),
      url: r.url || '', address: r.address || '', city: r.city || '',
      phone: Array.isArray(r.phone) ? r.phone.join(',') : (r.phone || ''),
      updated_at: new Date().toISOString(),
    });
    if (!row.source_id) { skipped++; continue; }
    try { upsert.run(Object.values(row)); n++; }
    catch (e) { if (String(e.message).includes('UNIQUE')) dup++; else console.error('insert err:', e.message, JSON.stringify(row)); }
  }
});

const rows = [];
for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
  const t = line.trim(); if (!t) continue;
  try { rows.push(JSON.parse(t)); } catch { skipped++; }
}
tx(rows);
console.log(`2GIS leads -> second_brain.db: ${n} written, ${dup} duplicate-skipped, ${skipped} skipped-no-id. columns used: [${colsUsed.join(', ')}]`);
db.close();
