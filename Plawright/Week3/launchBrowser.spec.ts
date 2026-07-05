import test, {chromium, firefox, webkit} from '@playwright/test';

test("launchbrowser", async()=> {
  // Launch browser
  const browser = await webkit.launch({headless: false});

  // Create context
  const context = await browser.newContext();

  // Create page
  const page = await context.newPage();

  // Open website
  await page.goto("https://google.com");

  const title = await page.title();
  console.log('page title:', title);

  // Close browser
  await browser.close();

})