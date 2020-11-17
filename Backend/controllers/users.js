const User = require('../models/users')
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
  console.log(req.body)
  User
    .findOne({ email: req.body.email })
    .then(user => {

      if (!user) {
        res.send({ message: 'User not found' })

        return
      }
      
      if (!user.validatePassword(req.body.password)) {
        res.send({ message: 'Incorrect password' })

        return
      }

      const token = jwt.sign(
        { sub: user._id },
        secret,
        { expiresIn: '6h' }
      )
      res.status(202).send({ token })

    })

    .catch(error => res.send(error))

}

module.exports = {
  createUser,
  logInUser
}