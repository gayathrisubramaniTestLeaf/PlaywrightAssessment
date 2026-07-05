import { test, expect } from '@playwright/test';

test('Handle windows in LeafGround', async ({ page, context }) => {

    // Load URL
    await page.goto('https://www.leafground.com/window.xhtml');

    // Store parent page
    const parentPage = page;

    // Create promise before clicking Open button
    const [childPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("//span[text()='Open']").click()
    ]);

    // Wait for child page to load
    await childPage.waitForLoadState();

    // Enter Mail ID in child window
    await childPage.locator('#email').fill('test@gmail.com');

    // Come back to parent page without closing child page
    await parentPage.bringToFront();

    // Handle multiple windows
    const [multiplePages] = await Promise.all([
        context.waitForEvent('page'),
        parentPage.locator("//span[text()='Open Multiple']").click()
    ]);

    // Wait for new pages to open
    await parentPage.waitForTimeout(3000);

    // Get all pages count
    const allPages = context.pages();

    console.log('Total pages opened: ', allPages.length);

});