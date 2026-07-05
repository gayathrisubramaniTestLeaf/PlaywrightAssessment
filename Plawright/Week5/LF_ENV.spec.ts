import { test } from '@playwright/test' 
import dotenv from 'dotenv' 
//const fileToRead = process.env.envFile || 'PROD' 
dotenv.config({path:'utils/prod.env'}) 

test('Login Test', async ({ page }) => { 

    let url = process.env.url as string 
    let username = process.env.LT_username as string 
    let password = process.env.LT_password as string 

    await page.goto(url) 
    await page.locator('#username').fill(username) 
    await page.locator('#password').fill(password) 
    await page.locator('.decorativeSubmit').click() 
})

//function parse(): any {
 //   throw new Error('Function not implemented.')
//}
