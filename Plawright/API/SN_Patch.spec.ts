import {test, expect } from '@playwright/test'

let username="admin"
let password="FGf1Zodo==R5"
let login=`${username}:${password}`
//btoa
let loginInfo=btoa(login)
console.log(loginInfo)


test.only("Update Request",async({request})=>{

    let patchRequest = await request.patch(
        'https://dev212269.service-now.com/api/now/table/incident/a32db11783650350c6ae1429feaad301',
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${loginInfo}`
            },

            data: {
                "short_description": "Updated via Playwright PATCH",
                "caller-id": "Gayathri"
            }
        }
    )

    let patchResponse = await patchRequest.json()

    console.log(patchResponse)
    expect(patchRequest.status()).toBe(200)

    

})