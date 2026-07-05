import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import fs from 'fs';

import { readCSV } from '../utils/csvReader';

dotenv.config();

test('E2E Lead Creation and Edit using Data Parameterization', async ({ page }) => {

    // Read CSV Data
    const csvData = await readCSV('./Test-Data/createLead.csv');

    // Read JSON Data
    const editData = JSON.parse(
        fs.readFileSync('./Test-Data/editLead.json', 'utf-8')
    );

    // Loop through CSV records
    for (const data of csvData) {

        // Launch Application
        await page.goto(process.env.APP_URL!);

        // Login
        await page.locator('#username').fill(process.env.USERNAME!);

        await page.locator('#password').fill(process.env.PASSWORD!);

        await page.locator('.decorativeSubmit').click();

        // Click CRM/SFA
        await page.getByText('CRM/SFA').click();

        // Navigate to Leads
        await page.getByText('Leads').click();

        // Click Create Lead
        await page.getByText('Create Lead').click();

        // Enter Company Name from CSV
        await page.locator('#createLeadForm_companyName')
            .fill(data.companyName);

        // Enter First Name from CSV
        await page.locator('#createLeadForm_firstName')
            .fill(data.firstName);

        // Enter Last Name from CSV
        await page.locator('#createLeadForm_lastName')
            .fill(data.lastName);

        // Click Create Lead
        await page.locator('.smallSubmit').click();

        // Validate Lead Created
        await expect(page).toHaveURL(/viewLead/);

        // Click Edit
        await page.getByText('Edit').click();

        // Update Company Name
        await page.locator('#updateLeadForm_companyName')
            .fill(editData.companyName);

        // Update First Name
        await page.locator('#updateLeadForm_firstName')
            .fill(editData.firstName);

        // Update Last Name
        await page.locator('#updateLeadForm_lastName')
            .fill(editData.lastName);

        // Click Update
        await page.locator('.smallSubmit').click();

        // Validate Updated Lead
        await expect(page.locator('#viewLead_firstName_sp'))
            .toContainText(editData.firstName);

        // Logout Optional
        // await page.getByText('Logout').click();

    }

});