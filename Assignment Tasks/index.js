const fs = require('fs')


// ==================== Task 1 ====================
// Create Student Information File

{
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
}


// ==================== Task 2 ====================
// Read Student Information

{
    const data = fs.readFileSync('student.txt','utf-8')

    console.log(data)
}


// ==================== Task 3 ====================
// Update Student Information

{
    const data = `
Experience: 1 Year
City: Kolkata`

    fs.appendFile('student.txt',data,(err)=>{

        if (err){
            console.log(err)
        }else{
            console.log('data updated..')
        }

    })
}


// ==================== Task 4 ====================
// Manage File Name

{
    fs.rename('student.txt','studentDetails.txt',(err)=>{

        if (err){
            console.log(err)
        }else{
            console.log('file renamed..')
        }

    })
}


// ==================== Task 5 ====================
// Remove File

{
    fs.unlink('studentDetails.txt',(err)=>{

        if (err){
            console.log(err)
        }else{
            console.log('file deleted..')
        }

    })
}