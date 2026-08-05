#!/usr/bin/env node
// Lightweight bridge: 2GIS leads (JSONL output from any 2GIS scrape) -> acedia second_brain.db `companies`.
// Runs on the VPS after a nightly 2GIS crawl. Schema-adaptive: introspects `companies` columns so it
// survives schema drift in second_brain.db (inserts only columns that exist).
// Usage: SECOND_BRAIN_DB=/root/.hermes/data/second_brain.db node scripts/import-2gis-leads-to-secondbrain.mjs data/kz-leads-almaty-2026-08-06.jsonl
import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

const dbPath = process.env.SECOND_BRAIN_DB || '/root/.hermes/data/second_brain.db';
const file = process.argv[2];
if (!file) { console.error('usage: IMPORT_2GIS_LEADS ... <leads.jsonl>'); process.exit(2); }

const db = new Database(dbPath);
const cols = db.prepare(`PRAGMA table_info(companies)`).all().map(c => c.name);

const have = (c) => cols.includes(c);
const colList = (cs) => cs.map(c => `"${c}"`).join(', ');
const ph = (cs) => cs.map(() => '?').join(', ');

const upsertCols = ['name','source','source_id','url','address','city','phone','updated_at']
  .filter(have);
const insertCols = upsertCols;
const conflict = have('source_id') && have('source') ? 'ON CONFLICT(source,source_id) DO UPDATE SET name=excluded.name,url=excluded.url,address=excluded.address,city=excluded.city,phone=excluded.phone,updated_at=excluded.updated_at' : '';

const upsert = db.prepare(`
  INSERT INTO companies (${colList(insertCols)}) VALUES (${ph(insertCols)})
  ${conflict}
`);

let n = 0, skipped = 0;
for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
  const t = line.trim(); if (!t) continue;
  const r = JSON.parse(t);
  const row = {
    name: r.name || '',
    source: '2gis',
    source_id: String(r.firm_id || ''),
    url: r.url || '',
    address: r.address || '',
    city: r.city || '',
    phone: (r.phone || []).join(','),
    updated_at: new Date().toISOString(),
  };
  if (!row.source_id) { skipped++; continue; }
  db.prepare('INSERT OR IGNORE INTO companies (' + colList(insertCols.filter(c=>c!=='updated_at')) + ') VALUES (' + ph(insertCols.filter(c=>c!=='updated_at')) + ')').run(...insertCols.filter(c=>c!=='updated_at').map(c=>row[c]));
  n++;
}
console.log(`import 2gis -> second_brain.db: ${n} upserted, ${skipped} skipped (no source_id). companies columns used: ${insertCols.join(',')}`);
db.close();
