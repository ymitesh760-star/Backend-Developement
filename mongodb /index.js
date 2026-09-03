const express = require('express');
const connectDbs = require('./db');
const app = express();

const PORT = 3000

app.listen(PORT , async()=>{
    await connectDbs()
    console.log(`server is running on port ${PORT}`)
})