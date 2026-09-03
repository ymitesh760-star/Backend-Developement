//async

const fs =require('fs')

const data = 'this is node.js file '
fs.writeFile('info.txt',data,(err)=>{
    if (err){
        console.log(err)
    }else{
        console.log('data sent..')
    }


})

//async

fs.writeFileSync("new.txt",data +'\n',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('data sent...')
    }
})