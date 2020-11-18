const User = require('../models/users')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const axios = require('axios')
const { Template } = require('webpack')


function getUsers(req, res) {
  User
    .find()
    .populate('user.favourites')
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
      console.log(body)
      //account.save()
      //res.send(account)
      return account.save()
    })
    .then(account => res.send(account))
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

function addToFavourites(req, res) {

  const favourite = req.body
  console.log(favourite)

  favourite.user = req.currentUser

  const name = req.currentUser._id
  console.log(name)
  console.log('here2')

  User
    .findById(name)
    .populate('favourites.user')
    .then(user => {
      console.log('555')

      if (!user) return res.status(404).send({ message: 'User not found' })

      // user.favourites.list.push(favourite)
      // return favourite.save()

      user.favourites.set(favourite)

      return user.save()
    })

    .then(user => res.send(user))
    .catch(err => res.send(err))
}

module.exports = {
  createUser,
  logInUser,
  getUsers,
  singleUser,
  removeUser,
  modifyUser,
  addToFavourites
}