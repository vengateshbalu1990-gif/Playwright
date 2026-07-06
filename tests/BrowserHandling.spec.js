import{chromium,test} from '@playwright/test'
test('browser handling',async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(4000);
    const page2=await context.newPage();
    await page2.goto('https://www.flipkart.com/');
    await page2.waitForTimeout(4000);
//browser 2 new to git
    const browser3=await chromium.launch();
    const context3=await browser2.newContext();
    const page3=await context2.newPage();
    await page3.goto('https://www.youtube.com/');
    await page3.waitForTimeout(4000);
    const page4=await context2.newPage();
    await page4.goto('https://www.facebook.com/');
    await page4.waitForTimeout(4000);

    name="vengatesh"
    age="35"

})
