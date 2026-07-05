import { test } from '@playwright/test'

test.use({
    storageState: 'auth.json'
})

test('Open Accounts page', async ({ page }) => {

    await page.goto('https://leaftaps.com/opentaps/control/main')

    await page.locator("text=CRM/SFA").click()

    await page.locator("text=Accounts").click()

})