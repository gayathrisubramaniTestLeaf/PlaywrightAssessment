import { test, expect } from '@playwright/test'

test('Verify order', async ({ page }) => {

    // Launch URL
    await page.goto('https://dev296651.service-now.com');

    // Login
    await page.locator('#user_name').fill('admin');
    await page.locator('#user_password').fill('E7i*7wNgX*mM');

    await page.locator('#sysverb_login').click();

    // Wait for homepage
    await page.waitForLoadState('networkidle');

    // Open All menu
    await page.locator("#d6e462a5c3533010cbd77096e940dd8c").click();

    // Search for Service Catalog
    await page.locator('input[placeholder="Filter"]').fill('Service Catalog');

    // Click Service Catalog
    await page.getByText('Service Catalog').nth(1).click();

    // Wait for catalog page
    await page.waitForLoadState('networkidle');

    // Switch to iframe
    const frame = page.frameLocator('iframe');

    // Click Mobiles category
    await frame.locator(".homepage_category_only_description_cell").nth(7).click();

    // Select Apple iPhone 13 Pro
    await frame.locator(".h2").nth(1).click();

    // Select Lost or Broken iPhone -> Yes
    await frame.locator('label:has-text("Yes")').click();

    // Enter original phone number
    await frame.locator(".cat_item_option.sc-content-pad.form-control").fill("99");

    // Select Monthly data allowance
    await frame.locator("select[name='IO:ff1f478e9747011021983d1e6253af68']").selectOption({value:'unlimited'});

    // Select color
    await frame.locator("//label[text()='Sierra Blue']").check()

    // Select storage
    await frame.locator("//label[text()='512 GB [add $300.00]']").check()

    // Click Order Now
    await frame.locator('button:has-text("Order Now")').click();

    // Validate confirmation message
    await expect(frame.locator('text=Thank you')).toBeVisible();

    // Capture full-page screenshot
    await page.screenshot({
        path: 'OrderConfirmation.png',
        fullPage: true
    });

});
