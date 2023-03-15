const axios =require ("axios")
module.exports={
Add:(req,res)=>{
    console.log(req.body)
        const url="https://developers.flouci.com/api/generate_payment"
        const payload={
            "app_token": "b3010a92-21b7-416e-884c-fef8089b56bf",
            "app_secret": "32e3dc22-11a6-4168-9861-5be74850e899",
            "amount": req.body.amount,
            "accept_card": "true",
            "session_timeout_secs": 1200,
            "success_link": "http://localhost:3001/success",
            "fail_link": "http://localhost:3001/fail",
            "developer_tracking_id": "9a649256-d7f2-41a0-be44-e8d09a945959"
        }
         axios
        .post(url,payload)
        .then(result=>{res.send(result.data)}
        )
        .catch((error)=>{console.log(error)})
    },
    Verify:(req,res)=>{
        const payment_id=req.params.id;
         axios.get(`https://developers.flouci.com/api/verify_payment/${payment_id}`,
        {
            headers : {
                'Content-Type': 'application/json',
                'apppublic': "b3010a92-21b7-416e-884c-fef8089b56bf",
                'appsecret': "32e3dc22-11a6-4168-9861-5be74850e899"
              }
        }).then((result)=>{res.send(result.data)})
        .catch((error)=>{console.log(error)})
    }
    
}


