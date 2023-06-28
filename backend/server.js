require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const eventsRoutes = require('./routes/events')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/events', eventsRoutes)

//conncet to db
mongoose.connect(process.env.MONGO_EVENTS_URI)
// listen for requests
app.listen(process.env.PORT, () => { })