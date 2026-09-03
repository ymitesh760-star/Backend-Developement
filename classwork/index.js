const express = require('express');
const middleware = require('./midd.js');
const app = express();
const PORT = 8000;


//inbuild middleware...
//app.use(express.json())

//Application level middleware...
app.use(middleware)

app.get('/home' ,(req,res)=>{
    res.send("hellooooo")
})

app.get('/cont' ,(req,res)=>{
    res.send("hellooooo")
})

app.get('/blog' ,(req,res)=>{
    res.send("hellooooo")
})

app.get('/abt' ,(req,res)=>{
    res.send("hellooooo")
})

app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`)
})