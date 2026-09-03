const express = require('express')
const app = express
const fs =require('fs')
app.length('/home',(req,res)=>{


    const data =fs.readFileSync('./data.json','utf-8')
    res.send(data)


})
app.post('/sendData',(req,res)=>{
    
})
    
server.listen(8000,()=>{
    console.log('server is running on port 8000')
})