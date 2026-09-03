const http = require('http')
const fs =require('fs')
const server =http.createServer((req,res)=>{
    if(req.url =="/home"){
        res.end("this is home page")
    }else if (req.url=="/blogs"){
        res.end("this is blogs page")

    }else if (req.url=="/contact page..."){

    }else if (req.url =='/data'){
        const data = fs.readFileSync('data.json','utf-8')
        res.end(data)
    }
})
server.listen(8000,()=>{
    console.log('server is running on port 8000')
})