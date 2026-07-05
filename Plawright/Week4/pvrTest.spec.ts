import {test, expect} from '@playwright/test'
test ("PVR Test Case", async ({page}) =>
{
    await page.goto("https://www.pvrcinemas.com/")
    await page.waitForTimeout(2000)
    await page.locator("//h6[text()='Chennai']").click()
    await page.waitForTimeout(2000)
    await page.locator("[class='cinemas-inactive']").click()
   await page.locator("//span[text()='Select Cinema']").click()
    await page.locator("//span[contains(text(),'INOX National,Virugambakkam Chennai')]").click()

     await page.locator("//span[text()='Tomorrow']").click()
      await page.locator("//span[text()='BLAST']").nth(1).click()
      await page.locator("//span[text()='04:20 PM']").first().click()
       await page.getByLabel("Submit").click();
       await page.locator("//button[text()='Accept']").click()
      await page.locator("//span[@id='SL.SILVER|P:23']").click()

      const moviename= page.locator("//h5[text()='BLAST']")
      await expect(moviename).toHaveText('BLAST')
      
      const movname= await page.locator("//h5[text()='BLAST']").innerText()
      console.log("Movie Name is:"+movname)

       const amount= await page.locator(".grand-prices").innerText()
      console.log ("Total amount is:"+amount)  

      const seatnum= await page.locator(".seat-number").innerText()
      console.log ("Seat Number is:"+seatnum)  

       const theatrename= await page.locator("//p[text()='INOX National,Virugambakkam Chennai']").innerText()
      console.log ("Theatre Detail is:"+theatrename) 

      let title = await page.title()
      console.log(title)
      await expect(page).toHaveTitle("PVR Cinemas")
 
    })
