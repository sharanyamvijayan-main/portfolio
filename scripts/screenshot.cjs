const { chromium } = require('playwright');

(async () => {
  const url = process.argv[2] || 'http://localhost:3000/work/nouri';
  const outPath = process.argv[3] || 'screenshot.png';
  const width = parseInt(process.argv[4] || '1440', 10);
  const height = parseInt(process.argv[5] || '900', 10);
  const fullPage = process.argv[6] !== 'viewport-only';
  const scrollY = parseInt(process.argv[7] || '0', 10);

  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
  });
  const page = await browser.newPage({ viewport: { width, height } });
  const errors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', (err) => errors.push(String(err)));
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  if (scrollY) {
    // scroll incrementally so lazy-loaded images along the way get triggered
    const steps = 6;
    for (let i = 1; i <= steps; i++) {
      await page.evaluate((y) => window.scrollTo(0, y), Math.round((scrollY * i) / steps));
      await page.waitForTimeout(150);
    }
    await page.waitForTimeout(500);
  }
  await page.waitForLoadState('networkidle').catch(() => {});
  await page.screenshot({ path: outPath, fullPage });
  await browser.close();
  if (errors.length) {
    console.log('CONSOLE ERRORS:');
    console.log(errors.join('\n'));
  } else {
    console.log('No console errors.');
  }
  console.log('Saved: ' + outPath);
})();
