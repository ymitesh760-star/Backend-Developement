const express = require('express')
const app = express();
const PORT = 6000;
const fs =require('fs')

// app.get('/search',(req,res)=>{
//   const x =req.query;

// //   res.send (x)
// //   console.log (x.movie)
// })

app.get('/search',(req,res)=>{
  const city =req.query.q
  const data =JSON.parse(fs.readFileSync('data.json','utf-8'))
  res.send(`my city is ${city} and temp.is ${data.cities[city]}`)
  
})



app.listen(PORT,()=>{
  console.log(`server is running at Port ${PORT}`)

})