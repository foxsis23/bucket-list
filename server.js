const express = require('express')
const mongoose = require('mongoose')
const {PORT,mongoURI} = require('./config')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const bucketListRoutes = require('./routes/api/bucketList')

//create express app
const app = express()
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

//connect to database
mongoose.connect(mongoURI).then(() => console.log('Connected to mongoDB'))
.catch((err) => console.log(err)) 


//routes
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use('/api/bucketListItems',bucketListRoutes)


app.listen(3000,() =>{
    console.log('Listening on http://localhost:3000')
})