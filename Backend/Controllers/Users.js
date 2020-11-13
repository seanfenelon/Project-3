const User = require('../Models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../Config/Environment')

function createUser(req, res) {

  const body = req.body
  console.log(body)
  User
    .create(body)
    .then(user => {
      console.log(user)
      console.log('here')
      res.send(user)
    })
    .catch(error => res.send(error))
}

function logInUser(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      
    })
}

module.exports = {
  createUser,
  logInUser
}