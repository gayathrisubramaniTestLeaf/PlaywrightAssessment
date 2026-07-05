import { test, expect } from '@playwright/test';

test('Verify dynamic movie ticket booking flow in PVR Cinemas website', async ({ page }) => {

    // 1. Launch browser and navigate
    await page.goto('https://www.pvrcinemas.com/', {
        waitUntil: 'domcontentloaded'
    });

    // 2. Handle city selection dynamically
    const cityPopup = page.locator("//h6[contains(text(),'Select City')]");

    if (await cityPopup.isVisible().catch(() => false)) {

        // Select first available city
        const city = page.locator("//div[contains(@class,'cities')]//img").first();

        await city.click();
        console.log("City selected");
    }

    // 3. Click Cinema option
   // await page.locator("//span[contains(text(),'Cinema')]").click();
     await page.locator("//span[text()='Select Cinema']").click()

    // 4. Click Select Cinema dropdown
    await page.locator("//select | //div[contains(@class,'cinema')]").first().click();

    // 5. Select any available cinema dynamically
    const cinemaOptions = page.locator("//option");

    const cinemaCount = await cinemaOptions.count();

    if (cinemaCount > 1) {
        const cinemaName = await cinemaOptions.nth(1).textContent();

        await page.selectOption("select", {
            label: cinemaName?.trim()
        });

        console.log(`Cinema Selected: ${cinemaName}`);
    }

    // 6. Select any available date
    const availableDates = page.locator("//div[contains(@class,'date')]//button");

    const dateCount = await availableDates.count();

    if (dateCount > 0) {
        await availableDates.first().click();
        console.log("Date selected");
    }

    // 7. Select any available movie
    const movies = page.locator("//div[contains(@class,'movie')]");

    const movieCount = await movies.count();

    if (movieCount > 0) {
        const movieName = await movies.first().textContent();

        await movies.first().click();

        console.log(`Movie Selected: ${movieName}`);
    }

    // 8. Select any available show time
    const showTimes = page.locator("//button[contains(@class,'show')]");

    const showCount = await showTimes.count();

    if (showCount > 0) {
        await showTimes.first().click();

        console.log("Show time selected");
    }

    // 9. Click Submit button
    const submitBtn = page.locator("//button[contains(text(),'Submit')]");

    if (await submitBtn.isVisible().catch(() => false)) {
        await submitBtn.click();
    }

    // 10. Handle cookie popup if displayed
    const cookieAccept = page.locator(
        "//button[contains(text(),'Accept')] | //button[contains(text(),'Allow')]"
    );

    if (await cookieAccept.isVisible().catch(() => false)) {
        await cookieAccept.click();
        console.log("Cookie popup handled");
    }

    // 11. Handle additional popup if displayed
    const popupOk = page.locator(
        "//button[contains(text(),'OK')] | //button[contains(text(),'Continue')]"
    );

    if (await popupOk.isVisible().catch(() => false)) {
        await popupOk.click();
        console.log("Additional popup handled");
    }

    // 12. Select any available seat dynamically
    const availableSeats = page.locator(
        "//span[contains(@class,'available')] | //button[contains(@class,'seat-available')]"
    );

    const seatCount = await availableSeats.count();

    if (seatCount > 0) {
        await availableSeats.first().click();

        console.log("Seat selected");
    }

    // 13. Verify selected seat information
    const selectedSeatInfo = page.locator(
        "//*[contains(text(),'Seat')]"
    );

    await expect(selectedSeatInfo).toBeVisible();

    // 14. Verify total amount displayed
    const totalAmount = page.locator(
        "//*[contains(text(),'Total')] | //*[contains(text(),'Amount')]"
    );

    await expect(totalAmount).toBeVisible();

    // 15. Verify page title
    const pageTitle = await page.title();

    console.log("Page Title:", pageTitle);

    expect(pageTitle.length).toBeGreaterThan(0);

    // 16. Click Proceed button
    const proceedBtn = page.locator(
        "//button[contains(text(),'Proceed')] | //button[contains(text(),'Pay')]"
    );

    if (await proceedBtn.isVisible().catch(() => false)) {
        await proceedBtn.click();

        console.log("Clicked Proceed button");
    }

    // Screenshot
    await page.screenshot({
        path: 'pvr-booking.png',
        fullPage: true
    });

});