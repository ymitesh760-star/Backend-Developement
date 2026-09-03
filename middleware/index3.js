const express =require('express')
const middleware = require('./md.js')
const app = express()


app.use (middleware)
app.get ('/home ',(req,res)=>{
  console.log ('this is home page ')
})


app.listen(8000,()=>{
  console.log('server is running  on port 8000')
})