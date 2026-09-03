// const http = require('http')
// const server =http.createServer((req,res)=>{
//     if(req.url =='/home' && req.method=='Get'){
//         res.end("this is home page")
//     }else if (req.url=='/sendData' && req.method=='POST'){
//         res.end('new Data send ho gaya ...')
//         let str  = "";
//         req.on ('data',(chunk)=>{
//             str +=chunk
//         })
//         req.on('end',()=>{
//             console.log(str)
//         })
//     }
// })

// server.listen(4040,()=>{
//     console.log('server is running on port 4040')
// })

// const express = require('express')
// const fs = require('fs')

// const app = express()
// app.use(express.text())

// app.get('/home', (req, res) => {
// fs.readFile('./Data.json', 'utf8', (err, data) => {
//     if (err) {
//     return res.status(500).send('Error reading data')
//     }

//     const jsonData = JSON.parse(data)

//     res.json(jsonData)
// })

// app.post('/sendData',(req,res)=>{
//     const data = fs.readFile('./Data.json','UTF-8');
//     console.log(data)
//     res.send(req.body)
// })
// })

// app.listen(4000, () => {
// console.log('server is running on port 4000');
// })

const express = require('express')
const app = express()
const fs = require('fs')

app.patch('/updateData/:id', (req,res)=>{
    const data = JSON.parse(fs.readFileSync('data.json' , 'utf-8'))
    const val = req.params.id
    const user = data.find((ele)=>{
        return ele.id == val
    })
    res.send (user)
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})