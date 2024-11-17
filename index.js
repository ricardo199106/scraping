import { chromium } from 'playwright';

async function runScraping() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.sodimac.cl');
  
  // Tu lógica de scraping aquí...

  await browser.close();
}

runScraping().then(() => {
  console.log("Scraping completado.");
}).catch(err => {
  console.error("Error en el scraping:", err);
});
