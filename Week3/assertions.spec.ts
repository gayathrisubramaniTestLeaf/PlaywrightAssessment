import {test, expect} from '@playwright/test'
test ("Assertion", async({page}) => {
    await page.goto("https://leafground.com/input.xhtml")
    await page.locator("//input[@placeholder='Babu Manickam']").fill('Gayathri');
     await page.locator("//input[@value='Chennai']").fill('Chennai');
     const enable= page.locator("(//input[@placeholder='Disabled'])")
  await expect(enable).toBeDisabled()
console.log("After Assertions")
})