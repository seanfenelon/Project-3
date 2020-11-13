const express = require('express')
const Router = require('./Router')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const expressServer = express()
//hmm

mongoose.connect(
  'mongodb://localhost/resortsdb',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) console.log(err)
    else console.log('Mongoose connected successfully!')
  }
)

expressServer.use((req, res, next) => {
  console.log(`Incoming request, ${req.method} to ${req.url}`)
  next()
})

expressServer.use(bodyParser.json())

expressServer.use('/api', Router)

expressServer.listen(8000)