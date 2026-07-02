import{test} from'@playwright/test'

test('Opening Amazon',async({page})=>{
await page.goto('https://www.amazon.in/');
await page.waitForTimeout(4000);
await page.locator()

}