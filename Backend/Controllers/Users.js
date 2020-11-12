const User = require('../Models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../Config/Environment')

function createUser(req, res) {
}

function logInUser(req, res) {

}

module.exports = {
  createUser,
  logInUser
}