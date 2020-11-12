const Resorts = require('../Models/Resorts')
const axios = require('axios')

function singleProxyResort(req, res) {
}

function getResorts(req, res) {

  Resorts
    .find()
    // .populate('user')
    .then(resorts => {
      res.send(resorts)
    })

}

function addResort(req, res) {
  //Resorts
  //  .create(req.body)
  //  .then(resort => {
  //    res.send(resort)
  //  })
  //  .catch(error => res.send(error))
}

function singleResort(req, res) {

  const name = req.params.name

  Resorts.
    findOne({ name: name })
    // .populate('comments.user')
    .then(resort => {

      res.send(resort)

    })
    .catch(error => res.send(error))

}

function removeResort(req, res) {
  //const name = req.params.name
//
  //Resorts
  //  .findOne({ name: { regex: name, $options: 'i' } })
  //  .then(resort => {
  //    resort.deleteOne()
  //    res.send(resort)
  //  })
}

function editResort(req, res) {
  //const name = req.params.name
  //const body = req.body
//
  //Resorts
  //  .then(resort => {
  //    if (!resort) return res.send({ message: 'No team' })
  //    resort.set(body)
  //    resort.save()
  //    res.send(resort)
  //  })
}

function createComment(req, res) {

}

function editComment(req, res) {

}

function deleteComment(req, res) {

}

module.exports = {
  singleProxyResort,
  getResorts,
  addResort,
  singleResort,
  removeResort,
  editResort,
  createComment,
  editComment,
  deleteComment
}