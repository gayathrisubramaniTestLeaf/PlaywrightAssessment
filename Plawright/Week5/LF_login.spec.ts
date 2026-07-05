import test from '@playwright/test'
import inputValue from '../utils/LT_login.json'

for(let getValue of inputValue){


test (`Login with different sets ${getValue.TestID}`  ,async({page}) => {
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("//input[@id='username']").fill(getValue.Username)
    await page.locator("//input[@id='password']").fill(getValue.Password)
    await page.locator("//input[@id='Login']").click()

})
}