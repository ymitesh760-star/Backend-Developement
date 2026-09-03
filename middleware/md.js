const middleware = (req,res,next)=>{
  const startTime =new Date().getTime()
  next ()
  const endTime = new Date().getDate()

  console.log ('time  taken ${endTime -startTime}ms')
  
}


module.exports = middleware








// consider  you are working in amazon ,once day your manager asked you to build a feature that can 