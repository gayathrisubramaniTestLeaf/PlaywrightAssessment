import test from '@playwright/test';

test ("Dropdown SelectOptions",async({page}) => {
    
    await page.goto("https://www.telerik.com/contact");

    await page.waitForTimeout(2000);
    await page.selectOption("[id='Dropdown-1']",{value:'Product questions'});
    
    await page.waitForTimeout(2000);
    await page.selectOption("[id='Dropdown-2']",{label:'BUNDLES'});

    await page.waitForTimeout(2000);

    await page.selectOption("#Country-1",{index:1});

    await page.waitForTimeout(2000); 
    
})