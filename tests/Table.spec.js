import { test } from '@playwright/test'

test('Opening Demoqa',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/tables');
const table= await page.locator('#table1');
const rows= await table.locator(' tbody tr');
for (let i=0; i<await rows.count();i++)
{
    const Row=await rows.nth(i).locator('td');
    console.log(await Row.count());

    let data=await Row.allTextContents();
    console.log(data);
}
for (let j=0; j<await rows.count();j++)
{
    const Column=await rows.nth(j).locator('td');
    console.log(await Column.count());

    let data1=await Column.allTextContents();
    console.log(data1);
} 

})