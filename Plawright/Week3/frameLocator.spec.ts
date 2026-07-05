import { test } from '@playwright/test';

test('Frame Handling with Frame Locator', async ({ page }) => {

    await page.goto('https://www.leafground.com/frame.xhtml;jsessionid=node0t35b10whi4gx8et13xxyiaiu17645993.node0')
    await page.frameLocator("(//iframe)[1]").locator("#click").click()
})