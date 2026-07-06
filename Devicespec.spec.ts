import test, {devices} from '@playwright/test'

test.use({
    ...devices['iPhone 16 Pro Max']
})

test('test', async({page}) =>{

    await page.goto("https://www.facebook.com")
    await page.waitForTimeout(2000)
})