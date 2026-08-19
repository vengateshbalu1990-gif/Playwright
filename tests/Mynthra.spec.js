import { test } from '@playwright/test';
import { firefox } from 'playwright';

test('Mynthra', async ({ page }) => {
  await page.context().setExtraHTTPHeaders({ 'accept-language': 'en-US,en;q=0.9' });
  let targetPage = page;
  let fallbackBrowser;
  try {
    await page.goto('https://www.myntra.com/boy-tshirts', { waitUntil: 'domcontentloaded', timeout: 30000 });
  } catch (e) {
    console.warn('Initial navigation failed in Chromium, attempting Firefox fallback:', e.message);
    try {
      fallbackBrowser = await firefox.launch();
      const ffContext = await fallbackBrowser.newContext();
      const ffPage = await ffContext.newPage();
      await ffPage.goto('https://www.myntra.com/boy-tshirts', { waitUntil: 'networkidle', timeout: 60000 });
      targetPage = ffPage;
    } catch (ffErr) {
      console.error('Firefox fallback also failed:', ffErr.message);
      if (fallbackBrowser) await fallbackBrowser.close();
      throw ffErr;
    }
  }

  // total number of product 
  const totalProducts = await targetPage.locator('//li[@class="product-base"]').count();
  console.log('Total number of products:', totalProducts);
//Min price for all products
  const priceElements = await targetPage.locator(
    '//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice"] or (text() and not(@class))]'
  ).allTextContents();
  const prices = priceElements.map(p => parseInt(p.replace(/[^\d]/g, ''), 10));
  const minPrice = Math.min(...prices);
 console.log('All prices:', prices);
  console.log('Minimum price:', minPrice);

//Min price only for discounted price
  const minpriceElements = await targetPage
   .locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]')
    .allTextContents();
  const minprices = minpriceElements
    .map((p) => parseInt(p.replace(/[^\d]/g, ''), 10));
  const minDiscountedPrice = Math.min(...prices);
  console.log('Discounted prices:', minprices);
  console.log('Minimum discounted price:', minDiscountedPrice);

   if (fallbackBrowser) await fallbackBrowser.close();

});

 