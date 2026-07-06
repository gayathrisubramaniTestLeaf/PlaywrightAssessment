import axios from "axios";
let email_id=`gayathrinew3003@gmail.com`
let endpoint_uri=`https://gayathri-s.atlassian.net/rest/api/2/issue`
let KeyName=`KAN`
let ApiToken='ATATT3xFfGF09mOyBogaxXbFW0Ji_CimlFSzs6Nz9LY3gKUrhSpQtC14bvFraVhz06n38oEUzd9LD31vtDyIe5A3LPGaaONaZBuId6yDPZbinbh7ywhKqCGjsRFYTsenMJTRPqs4gbTmtO9of5pY4CmrYrk4qDW60HIq-Uya9r7uXpY_7JU3IlQ=42A091EB'

async function CreateIssue(summary:string,description:string){
    const data={
        "fields": {
          //  "assignee": {
           //     "id": "712020:7c5c5816-2dbc-493a-9b1c-1a9194830863"
           // },
            "project":{
                "key":KeyName
            },
           "issuetype":{
    "name":"Bug"
    //Task, Feature,Epic
},
"summary":summary,
"description":description

    }

    }

//API REQUEST
const response=await axios.post(endpoint_uri,data,{

headers:{
    "Content-Type":"application/json",
},

auth:{
    username:email_id,
    password:ApiToken
}
})

const resBody=response.data
console.log(resBody)
    
}


CreateIssue("Bug in login page","login page is not working properly")