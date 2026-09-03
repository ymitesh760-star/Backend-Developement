const express = require('express');
const fs = require('fs');

const app = express()

app.get ('/home',(req,res)=>{
  const data = fs.readFileSync('./data.json','utf-8');
  data.push(req.body)
  res.send(data)
})


app.listen(6060,()=>{
  console.log("server is runing port 6060");
})