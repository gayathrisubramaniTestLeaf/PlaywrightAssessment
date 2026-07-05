import { test } from '@playwright/test';

test('Prompt Alert', async ({ page }) => {

    await page.goto('https://www.leafground.com/alert.xhtml');

    page.once('dialog', async dialog => {

        console.log(dialog.type());
        console.log(dialog.message());

        await dialog.accept('Playwright');

    });

    await page.click("(//span[text()='Show'])[5]");

});