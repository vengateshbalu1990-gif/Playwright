// // @ts-check


// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
// import {test} from '@playwright/test'
// import { asyncWrapProviders } from 'node:async_hooks';
import { test } from '@playwright/test'

test('Opening mynthra',async({page})=>{
    await page.goto('https://www.myntra.com/');
    console.log(await page.title());
    console.log(await page.url());
    await page.screenshot({path:'./Mynthra.png'});
    await page.waitForTimeout(4000);

    await page.goto('https://www.meesho.com/');
    console.log(await page.title());
    console.log(await page.url());
    await page.screenshot({path:'./meesho.png'});
    
    await page.waitForTimeout(4000);
})