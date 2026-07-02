import { test } from '@playwright/test'

test('Opening Demoqa',async({page})=>{
await page.goto('https://demoqa.com/text-box');
await page.waitForTimeout(4000);
await page.locator('#userName').fill('Vengatesh');
await page.waitForTimeout(2000);
await page.locator("[placeholder='name@example.com']").fill('vengi1990@gmail.com');
await page.locator("[placeholder='Current Address']").fill('3, chokkalingapuram, Edamalaipattipudur,Trichy-620012');
await page.locator(".form-control").nth(3).fill('3, chokkalingapuram, Edamalaipattipudur,Trichy-620012');
await page.locator("button[type='button']").nth(1).click();
 await page.screenshot({path:'./Demo.png'});
await page.waitForTimeout(4000);
})