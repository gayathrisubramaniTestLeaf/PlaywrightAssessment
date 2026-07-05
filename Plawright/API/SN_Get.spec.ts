import {test, expect } from '@playwright/test'

let username="admin"
let password="FGf1Zodo==R5"
let login=`${username}:${password}`
//btoa
let loginInfo=btoa(login)
console.log(loginInfo)


test.only("Get Request",async({request})=>{


    let getReq= await request.get('https://dev212269.service-now.com/api/now/table/incident/ae2d359f83250350c6ae1429feaad362',{


        headers:{
            "Content-Type":"application/json",
        "Authorization":`Basic ${loginInfo}`
        }


    })
    //response body
let getRes=await getReq.json()
console.log(getRes)


})