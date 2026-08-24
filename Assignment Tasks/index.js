const fs = require('fs')

const data = `Name: Sushant
Course: Full Stack Development
Technology: Node.js`

fs.writeFile('student.txt',data,(err)=>{

    if (err){
        console.log(err)
    }else{
        console.log('data sent..')
    }

})