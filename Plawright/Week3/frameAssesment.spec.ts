import { test } from '@playwright/test';

test('Frame Handling with Frame Locator Assessment', async ({ page }) => {

    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
    page.once("dialog",alertType =>{
        alertType.accept()
    })
    
    await page.frameLocator("//iframe[@name='#iframeResult']").locator("//button[text()='Try it']").click()
    console.log("Presses OK")
})