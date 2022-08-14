const express = require('express')
const cors = require('cors')
const goalRoutes = require('./routes/goalRoutes')
const {errorHandler} = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', goalRoutes)
app.use(errorHandler)

app.listen(port,()=>{ console.log(`running on port ${port}`) })