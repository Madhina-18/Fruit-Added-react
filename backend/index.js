const express = require("express")
const app = express()


var Farr = []

app.use(express.urlencoded({extended:true}))

app.post("/",function(req,res){

    console.log(req.body.fruitName)
    Farr.push(req.body.fruitName)
    console.log("fruitName Connected :",req.body.fruitName)
    res.send(Farr)
   

   
    
  })


app.listen(5000,function(){
    console.log("Server Started..")
})