import { test, expect } from '@playwright/test';
test ("Sample", async({page}) => {
    await page.goto("https://my.norton.com/")
    await page.waitForTimeout(20000)
    await page.getByTestId("setup-SignIn").click()
    await page.screenshot({ path:'SignIn.png'});
    await page.locator("[id='loginUsername']").fill("gayathri.subramani@gendigital.com")
    await page.locator("[id='continue_button']").click()
    await page.locator("[id='loginPassword']").fill("Symc@123")

    
})