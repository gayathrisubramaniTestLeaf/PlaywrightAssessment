import test from '@playwright/test';
test ("Salesforce Login Page", async({page}) => {
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("[id='username']").fill("democsr")
    await page.locator("[id='password']").fill("crmsfa")
    await page.screenshot({ path: 'screenshot.png' });
    await page.locator(".decorativeSubmit").click()
    await page.waitForTimeout(20000)
    await page.locator(".crmsfa").click()
   // await page.waitForTimeout(30000)
  //  await page.screenshot({ path: 'screenshot1.png' });
   // await page.locator("[id='ext-gen512']").click()
   // await page.screenshot({ path: 'screenshot2.png' });
    console.log(await page.title())
})