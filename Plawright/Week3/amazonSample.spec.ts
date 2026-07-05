import {test} from '@playwright/test'
test("Sample", async({page}) => 
{
  await page.goto("https://www.amazon.in/")  
   await page.selectOption("[id ='searchDropdownBox']", {index:3})
    await page.waitForTimeout(2000)
    await page.locator("[id='twotabsearchtextbox']").fill("Formal Shirts")
await page.locator("[id='nav-search-submit-button']").click()
    
    
})