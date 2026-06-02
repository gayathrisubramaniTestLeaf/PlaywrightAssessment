import { test, expect } from '@playwright/test';

test('Navigate to URL', async ({ page }) => {

    // Navigate to URL
    await page.goto('https://www.google.com');

    // Verify title
    await expect(page).toHaveTitle(/Google/);

});