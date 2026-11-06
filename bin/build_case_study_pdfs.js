#!/usr/bin/env node
// Renders the case-study PDFs from the print pages (one source of truth: _data/case_studies/*.yml).
// 1) Build the site with the print collection switched on:
//      bundle exec jekyll build --config _config.yml,bin/print-config.yml -d /tmp/cs_site
// 2) Serve it:  (cd /tmp/cs_site && python3 -m http.server 4011)
// 3) Run:       node bin/build_case_study_pdfs.js http://127.0.0.1:4011
// Requires Playwright (npm i -D playwright). Writes assets/pdf/case_studies/*.pdf.
// 4) Shrink them:  python3 bin/compress_pdfs.py
const { chromium } = require('playwright');
const path = require('path');
const base = process.argv[2] || 'http://127.0.0.1:4011';
const studies = { veritas: 'Veritas', workday: 'Workday', gallify: 'Gallify', codamarket: 'CODAmarket', goldsmith: 'Goldsmith' };
(async () => {
  const browser = await chromium.launch();
  for (const [slug, name] of Object.entries(studies)) {
    const page = await browser.newPage();
    await page.goto(`${base}/print/${slug}/`, { waitUntil: 'networkidle' });
    await page.evaluate(() => Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; }))));
    const out = path.join(__dirname, '..', 'assets', 'pdf', 'case_studies', `Edward_Profio_${name}_Case_Study.pdf`);
    await page.pdf({
      path: out, preferCSSPageSize: true, printBackground: true, displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate: `<div style="width:100%;font-family:Inter,Arial,sans-serif;font-size:7px;color:#5a6578;padding:0 .6in;display:flex;justify-content:space-between"><span>Edward Profio · ${name} case study</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`,
    });
    console.log('wrote', out);
    await page.close();
  }
  await browser.close();
})();
