import { test, expect, request } from '@playwright/test';

test('Create, Update and Delete Lead in Salesforce', async ({ page }) => {

    // =====================================
    // Salesforce Credentials
    // =====================================
    const username = 'dilipkumar.rajendran@testleaf.com';
    const password = 'TestLeaf@2025';

    // =====================================
    // Test Data
    // =====================================
    const salutation = 'Mr.';
    const lastName = 'RajAPILead';
    const company = 'TestLeaf';
    const firstName = 'Dilip';
    const title = 'QA Engineer';

    // =====================================
    // ACCESS TOKEN GENERATION
    // Replace with Connected App details
    // =====================================
    const clientId = 'YOUR_CLIENT_ID';
    const clientSecret = 'YOUR_CLIENT_SECRET';
    const securityToken = 'YOUR_SECURITY_TOKEN';

    const apiContext = await request.newContext();

    const tokenResponse = await apiContext.post(
        'https://login.salesforce.com/services/oauth2/token',
        {
            form: {
                grant_type: 'password',
                client_id: clientId,
                client_secret: clientSecret,
                username: username,
                password: password + securityToken
            }
        }
    );

    expect(tokenResponse.ok()).toBeTruthy();

    const tokenData = await tokenResponse.json();

    const accessToken = tokenData.access_token;
    const instanceUrl = tokenData.instance_url;

    console.log('Access Token Generated');
    console.log('Instance URL:', instanceUrl);

    // =====================================
    // CREATE LEAD - POST
    // =====================================
    const createLeadResponse = await apiContext.post(
        `${instanceUrl}/services/data/v59.0/sobjects/Lead`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            data: {
                Salutation: salutation,
                LastName: lastName,
                Company: company
            }
        }
    );

    expect(createLeadResponse.status()).toBe(201);

    const createLeadData = await createLeadResponse.json();

    const leadId = createLeadData.id;

    console.log('Lead Created ID:', leadId);

    // =====================================
    // UPDATE LEAD - PATCH
    // =====================================
    const updateLeadResponse = await apiContext.patch(
        `${instanceUrl}/services/data/v59.0/sobjects/Lead/${leadId}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            data: {
                FirstName: firstName,
                Title: title
            }
        }
    );

    expect(updateLeadResponse.status()).toBe(204);

    console.log('Lead Updated Successfully');

    // =====================================
    // SALESFORCE LOGIN
    // =====================================
    await page.goto('https://login.salesforce.com');

    await page.locator('#username').fill(username);
    await page.locator('#password').fill(password);

    await page.locator('#Login').click();

    await page.waitForLoadState('networkidle');

    // =====================================
    // Freeze DOM Command
    // Open browser console and execute:
    // setTimeout(()=>{debugger},4000)
    // =====================================

    // =====================================
    // APP LAUNCHER
    // =====================================
    await page.locator('//button[@title="App Launcher"]').click();

    await page.locator('//button[text()="View All"]').click();

    // =====================================
    // SEARCH LEADS
    // =====================================
    await page.locator('//input[@placeholder="Search apps or items..."]')
        .fill('Leads');

    await page.locator('//p[text()="Leads"]').click();

    // =====================================
    // SEARCH CREATED LEAD
    // =====================================
    await page.locator('//input[contains(@name,"Lead-search-input")]')
        .fill(lastName);

    await page.keyboard.press('Enter');

    await page.waitForTimeout(3000);

    // =====================================
    // VERIFY LEAD
    // =====================================
    await expect(
        page.locator(`//a[contains(text(),'${lastName}')]`)
    ).toBeVisible();

    console.log('Lead verified successfully');

    // =====================================
    // DELETE LEAD
    // =====================================
    await page.locator('(//span[text()="Show Actions"])[1]').click();

    await page.locator('//span[text()="Delete"]').click();

    await page.locator('//button[@title="Delete"]').click();

    console.log('Lead deleted successfully');

    // =====================================
    // VERIFY DELETED LEAD
    // =====================================
    await page.locator('//input[contains(@name,"Lead-search-input")]')
        .fill(lastName);

    await page.keyboard.press('Enter');

    await page.waitForTimeout(3000);

    await expect(
        page.locator('//span[contains(text(),"No items to display")]')
    ).toBeVisible();

    console.log('Lead deletion verified successfully');

});