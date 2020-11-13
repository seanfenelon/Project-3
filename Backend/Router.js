const express = require('express')
const router = express.Router()
const resortsController = require('./controllers/resorts')
const userController = require('./controllers/users')
const secureRoute = require('./middleware/secureRoute')

router.route('/resorts')
  .get(resortsController.getResorts)
  .post(/*secureRoute*/resortsController.addResort)
//hhh
// ! Get clarification over the purpose of this
// router.route('/resorts-proxy/:name')
//   .get(resortsController.singleProxyResort)

// router.route('/resorts/:name')
//   .get(resortsController.singleResort)
//   .delete(secureRoute, resortsController.removeResort)
//   .put(secureRoute, resortsController.editResort)

router.route('/joinus')
  .post(userController.createUser)

router.route('/login')
  .post(userController.logInUser)

router.route('/resorts/:resortId/comments')
  .post(secureRoute, resortsController.createComment)

router.route('/resorts/:resortId/comments/:commentId')
  .put(secureRoute, resortsController.editComment)
  .delete(secureRoute, resortsController.deleteComment)

module.exports = router