import {test, expect} from '@playwright/test'

let username="admin"
let password="FGf1Zodo==R5"
let login= `${username}:${password}`

let loginInfo=btoa(login)
console.log(loginInfo)

test("POST Request",async({request}) =>{

    let postReq= await request.post(
        'https://dev212269.service-now.com/api/now/table/incident',
        {
        headers:{
            "content-Type":"application/json",
            "Authorization":`Basic ${loginInfo}`
        },
        
        data:{
            "short-description":"Create Incident via Postman",
            "caller-id":"Dilip",
        }
})

let res= await postReq.json()
console.log(res)

let sys_id=res.result.sys_id
console.log(sys_id)
expect(postReq.status()).toBe(201)

})