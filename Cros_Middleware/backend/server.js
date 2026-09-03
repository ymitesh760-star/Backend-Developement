const express=require("express")
const PORT =5001;
const cors=require('cors')
const fs=require('fs')

const app=express();
app.use(cors())

app.get('/home',(req,res)=>{
    const data=fs.readFileSync('data.json','utf-8')
    res.send(data)
})

app.listen(PORT,()=>{
    console.log('server is running')
})