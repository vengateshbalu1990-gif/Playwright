import { test } from '@playwright/test'

test('Drop Down',async({page})=>{
await page.goto('https://www.amazon.in/');
await page.getByText('Account & Lists').hover();
await page.locator('(//span[@class="nav-text"])[6]').click();
await page.waitForTimeout(4000);
})