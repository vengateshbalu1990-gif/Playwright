import { test } from '@playwright/test'

test('Opening Demoqa', async ({ page }) => {
	try {
		await page.goto('https://demoqa.com/text-box', { waitUntil: 'domcontentloaded', timeout: 30000 });
	} catch (e) {
		console.error('Navigation failed:', e.message);
		// retry with longer timeout
		await page.goto('https://demoqa.com/text-box', { waitUntil: 'networkidle', timeout: 60000 });
	}
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