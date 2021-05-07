require('dotenv/config')
const express = require('express')

const app = express()

const dataRoute = require('./routes/data')

app.use('/data',dataRoute)

app.get('/',(req,res)=>{
    res.status(200).json({
        data: "AIS data",
        status: "success",
        message:"check docs"
    })
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Listening on port',(process.env.PORT || 3000))
})