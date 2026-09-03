const fs = require('fs');

const middleware=(req,res,next)=>{
    const data = `URL: ${req.url} METHOD: ${req.method} `
    fs.appendFile(`logs.txt`, data, ()=>{

    })
}

    

module.exports = middleware