"use strict";
/*
 * 2GIS lead harvester — VPS-ready.
 * WHY HEADed: 2GIS gates headless/datacenter Chrome with a "museum" browser-support
 * shell. A headed chromium (launched under xvfb on servers) passes. A residential
 * proxy (SMARTPROXY_*) is recommended for reliable pagination; without it a single
 * IP is intermittently rate-gated.
 *
 * Usage:
 *   xvfb-run -a node scripts/scrape-2gis-to-jsonl.cjs almaty restaurant 40 data/kz-leads.jsonl
 * (run-2gis-leads.sh wraps this with xvfb automatically when $DISPLAY is unset)
 *
 * Requires: `playwright-core` (global) + /snap/bin/chromium present on the VPS.
 */
const { chromium } = require("playwright-core");
const fs = require("fs");
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
const PHONE_RE = /(\+7\s*\d{3}\s*\d{2}\s*\d{2}\s*\d{2})/g;

const [,, city = "almaty", category = "restaurant", maxFirms = 40, outFile = `data/kz-leads-${city}-${Date.now()}.jsonl`] = process.argv;
const nMax = Number(maxFirms);
fs.mkdirSync("data", { recursive: true });
const proxyArg = (process.env.SMARTPROXY_USER && process.env.SMARTPROXY_PASS)
  ? `--proxy-server=http://${encodeURIComponent(process.env.SMARTPROXY_USER)}:${encodeURIComponent(process.env.SMARTPROXY_PASS)}@gate.smartproxy.com:7000`
  : "";

async function launch() {
  return chromium.launch({
    headless: false,
    executablePath: "/snap/bin/chromium",
    args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-blink-features=AutomationControlled", "--lang=ru-RU", proxyArg].filter(Boolean),
    ignoreDefaultArgs: ["--enable-automation"],
  });
}

(async () => {
  // 1) LIST phase
  const browser = await launch();
  const ctx = await browser.newContext({ userAgent: UA, viewport: { width: 1366, height: 900 }, locale: "ru-RU" });
  const page = await ctx.newPage();
  let firm = 0, ids = [];
  for (let attempt = 1; attempt <= 4 && firm === 0; attempt++) {
    try {
      await page.goto(`https://2gis.kz/${city}/search/${encodeURIComponent(category)}`, { waitUntil: "domcontentloaded", timeout: 25000 });
      await new Promise(r => setTimeout(r, 4000 + attempt * 1000));
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await new Promise(r => setTimeout(r, 1000));
      firm = await page.evaluate(() => document.querySelectorAll('a[href*="/firm/"]').length);
      console.error(`[scrape] attempt ${attempt}: firms=${firm} title=${JSON.stringify(await (async()=>page.title())().catch(()=>''))}`);
    } catch (e) { console.error(`[scrape] attempt ${attempt}: ${String(e).slice(0, 80)}`); }
  }
  if (firm > 0) {
    ids = await page.evaluate(() => Array.from(new Set(
      Array.from(document.querySelectorAll('a[href*="/firm/"]')).map(a => a.href.match(/\/firm\/([a-f0-9-]+)\//)?.[1]).filter(Boolean)
    )).slice(0, nMax));
  }
  await ctx.close();
  await browser.close();
  console.error(`[scrape] collected ${ids.length} firm ids`);

  // 2) DETAIL phase
  const out = fs.createWriteStream(outFile);
  let n = 0;
  const browser2 = await launch();
  const ctx2 = await browser2.newContext({ userAgent: UA, viewport: { width: 1366, height: 900 }, locale: "ru-RU" });
  const p2 = ctx2.pages()[0] || await ctx2.newPage();
  for (const id of ids) {
    try {
      await p2.goto(`https://2gis.kz/${city}/firm/${id}`, { waitUntil: "domcontentloaded", timeout: 25000 });
      await new Promise(r => setTimeout(r, 3000));
      try { await p2.locator("button").filter({ hasText: /показ|тел|phone/i }).first().click({ trial: true, timeout: 1500 }).catch(() => {}); await new Promise(r => setTimeout(r, 1000)); } catch {}
      const html = await p2.content();
      const title = await p2.title();
      const name = (title.match(/^(.*?)\s*\|/) || [""])[1].trim().replace(/2ГИС.*$/, "").trim()
        || (html.match(/<title>([^<]+)<\/title>/) || [""])[1].trim() || "";
      const tel = await p2.$$eval('a[href^="tel:"]', as => as.map(a => a.getAttribute("href").replace("tel:", "").trim())).catch(() => []);
      const phones = [...new Set([...tel, ...(html.match(PHONE_RE) || [])])];
      const address = (html.match(/"address":"([^"]{0,160})"/) || [""])[1];
      out.write(JSON.stringify({ firm_id: id, name, address, phone: phones, url: `https://2gis.kz/${city}/firm/${id}`, city, source: "2gis", category }) + "\n");
      n++;
      console.error(`[detail] ${id}: "${name}" phones=${phones.length} addr="${address}"`);
    } catch (e) { console.error(`[detail] err ${id}: ${String(e).slice(0, 80)}`); }
  }
  out.close();
  await ctx2.close();
  await browser2.close();
  console.log(`OK ${n} live leads -> ${outFile}`);
})().catch(e => { console.error("FATAL", e.message); process.exit(1); });
