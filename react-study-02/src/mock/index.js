const express = require("express")
const app = express()
const router = require("./router")

app.use("/", router)

app.listen(3100, function(){
  console.log("server 3100 is runing")
})