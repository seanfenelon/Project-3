const User = require('../models/users')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const axios = require('axios')
const { Template } = require('webpack')


function getUsers(req, res) {
  User
    .find()
    .populate('user')
    .then(userList => {
      res.send(userList)
    })
    .catch(error => res.send(error))
}

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

function singleUser(req, res) {
  const name = req.params.username
  User
    .findOne({ username: { $regex: name, $options: 'i' } })
    .then(account => {
      res.send(account)
    })
    .catch(error => res.send(error))
}

function removeUser(req, res) {
  const name = req.params.username
  const currentUser = req.currentUser

  User
    .findOne({ username: { $regex: name, $options: 'i' } })
    .then(account => {
      if (!account._id.equals(currentUser._id) && !req.currentUser.isAdmin) {
        return res.status(401).send({ message: 'Unauthorised' })
      }
      account.deleteOne()
      res.send(account)
    })
    .catch(error => res.send(error))
}

function modifyUser(req, res) {
  const name = req.params.username
  const body = req.body

  const currentUser = req.currentUser

  User
    .findOne({ username: { $regex: name, $options: 'i' } })
    .then(account => {
      if (!account) return res.send({ message: 'No user by this name' })
      if (!account._id.equals(currentUser._id)) {
        return res.status(401).send({ message: 'Unauthorised' })
      }
      account.set(body)
      return account.save()
    })
    .then(account => res.send(account))
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
  logInUser,
  getUsers,
  singleUser,
  removeUser,
  modifyUser
}