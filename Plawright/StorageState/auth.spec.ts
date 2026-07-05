import { test } from '@playwright/test'

test('Login and save session', async ({ page }) => {

    await page.goto('https://leaftaps.com/opentaps/control/main')

    await page.locator('#username').fill('democsr')

    await page.locator('#password').fill('crmsfa')

    await page.locator('.decorativeSubmit').click()

    // Save login session
    await page.context().storageState({path: 'auth.json'})

})