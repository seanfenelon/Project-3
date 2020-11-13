const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

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
      if (!user.validatePassword(req.body.password)) {
        return res.status(401).send({ message: 'Unauthorized ' })
      }
      const token = jwt.sign(
        { sub: user._id },
        secret, 
        { expiresIn: '6h' }
      )
      res.status(202).send({ token, message: 'Login was successful!' })
    })
}

module.exports = {
  createUser,
  logInUser
}