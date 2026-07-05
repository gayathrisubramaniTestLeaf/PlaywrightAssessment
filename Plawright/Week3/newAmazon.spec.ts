import { test } from '@playwright/test'

test("Sample", async ({ page }) => {

    // Launch Amazon
    await page.goto("https://www.amazon.in/")
    await page.screenshot({ path: 'screenshots/homepage.png' })

    // Select category
    await page.selectOption("#searchDropdownBox", { index: 3 })
    await page.screenshot({ path: 'screenshots/category-selected.png' })

    // Enter search text
    await page.locator("#twotabsearchtextbox").fill("Formal Shirts")
    await page.screenshot({ path: 'screenshots/text-entered.png' })

    // Click search
    await page.locator("#nav-search-submit-button").click()

    // Wait for results page
    await page.waitForLoadState('networkidle')

    // Screenshot of results page
    await page.screenshot({ path: 'screenshots/search-results.png' })

})