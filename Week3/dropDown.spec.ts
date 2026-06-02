import test from '@playwright/test'
test ("Dropdown with Select Option", async({page}) => {
    await page.goto("https://www.telerik.com/contact")
    await page.selectOption("[id ='Dropdown-1']", {label:'Renewal'})
    await page.waitForTimeout(2000)
    await page.selectOption("[id ='Dropdown-2']", {index:3})
    await page.waitForTimeout(2000)
    await page.selectOption("[id='Country-1']", {value:'Algeria'})

})