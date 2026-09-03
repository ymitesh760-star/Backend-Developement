const mongoose = require('mongoose')

const connectDbs = async() =>{
    try{
      await mongoose.connect('mongodb://localhost:27017/newDatabase')
      console.log('database connected........')
    }catch(err){
        console.log(err)
    }

}

module.exports = connectDbs 
