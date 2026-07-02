import { test } from '@playwright/test'

test('Drop Down',async({page})=>{
await page.goto('https://www.amazon.in/');

await page.locator('#searchDropdownBox').selectOption({value:'search-alias=nowstore'});
await page.waitForTimeout(4000);
await page.locator('#searchDropdownBox').selectOption({label:'Apps & Games'});
await page.waitForTimeout(4000);
await page.locator('#searchDropdownBox').selectOption({index:8});
await page.waitForTimeout(4000);

})