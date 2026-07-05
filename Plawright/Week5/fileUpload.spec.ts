import test from '@playwright/test'
test ("File Upload", async ({page}) => {
    await page.goto ("https://www.naukri.com/registration/createAccount")
    await page.locator(".main-3").first().click()
    await page.locator("//input[@type='file']").setInputFiles('./tests/TestData/Gayathri_S_Resume.pdf')
    await page.waitForTimeout(2000)

})