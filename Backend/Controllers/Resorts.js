const Resorts = require('../Models/Resorts')
const axios = require('axios')

function singleProxyResort(req, res) {
}

function getResorts(req, res) {

  Resorts
    .find()
    .populate('user')
    .then(resorts => {
      console.log('here')
      console.log(resorts)
      res.send(resorts)
    })

}

function addResort(req, res) {
  Resorts
    .create(req.body)
    .then(resort => {
      res.send(resort)
    })
    .catch(error => res.send(error))
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

// function removeResort(req, res) {
//   const name = req.params.name
  
//   Resorts
//    .findOne({ name: { regex: name, $options: 'i' } })
//    .then(resort => {
//      resort.deleteOne()
//      res.send(resort)
//    })
// }

// function editResort(req, res) {
//   const name = req.params.name
//   const body = req.body
  
//   Resorts
//    .then(resort => {
//      if (!resort) return res.send({ message: 'No team' })
//      resort.set(body)
//      resort.save()
//      res.send(resort)
//    })
// }

function createComment(req, res) {

  const comment = req.body
  console.log(comment)

  comment.user = req.currentUser

  const id = req.params.resortId
  console.log(req.params.resortId)


  Resorts
    .findOne({ _id: id })
    .populate('comments.user')
    .then(resort => {
      console.log('hello')

      if (!resort) return res.status(404).send({ message: 'Resort not found' })

      resort.comments.push(comment)

      return resort.save()
    })

    .then(resort => res.send(resort))
    .catch(err => res.send(err))
}



function editComment(req, res) {

  const id = req.params.resortId

  Resorts
    .findOne({ id: id })
    .populate('comments.user')
    .then(resort => {
      console.log(resort)

      if (!resort) return res.status(404).send({ message: 'Resort not found' })

      const comment = resort.comments.id(req.params.commentId)

      if (!comment.user.equals(req.currentUser._id)) {
        return res.status(401).send({ message: 'Unauthorized' })
      }

      comment.set(req.body)
 
      return resort.save()
    })

    .then(resort => res.send(resort))
    .catch(err => res.send(err))

}

function deleteComment(req, res) {


  const id = req.params.resortId

  req.body.user = req.currentUser

  Resorts
    .findOne({ id: id })
    .populate('comments.user')
    .then(resort => {

      if (!resort) return res.status(404).send({ message: 'Not found' })

      const comment = resort.comments.id(req.params.commentId)

      if (!comment.user.equals(req.currentUser._id)) {
        return res.status(401).send({ message: 'Unauthorized' })
      }

      comment.remove()

      return resort.save()
    })

    .then(resort => res.send(resort))
    .catch(err => res.send(err))
}

module.exports = {
  singleProxyResort,
  getResorts,
  addResort,
  singleResort,
  // removeResort,
  // editResort,
  createComment,
  editComment,
  deleteComment
}