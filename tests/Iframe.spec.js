import{test} from '@playwright/test'
test('Iframes',async({page})=>{
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
    const iframe= await page.frameLocator('#frm2');
    await iframe.locator('#firstName').fill('Vengatesh');
    await iframe.locator('#lastName').fill('Balu');
    await iframe.locator('#malerb').click();
    await iframe.locator('#hindichbx').click();
    await page.waitForTimeout(4000);
    const iframe3=await page.frameLocator('#frm3');
    await page.waitForTimeout(4000);
    const iframe_inside= await iframe3.frameLocator('#frm2');
    await iframe_inside.locator('#firstName').fill('Vengatesh');
    await iframe_inside.locator('#lastName').fill('Balu');
    await iframe_inside.locator('#malerb').click();
    await iframe_inside.locator('#hindichbx').click();
    await page.waitForTimeout(4000);



})