const express = require('express')
const pubController = require('../controllers/pubControllers')
const cusController = require('../controllers/customController')
const eveController = require('../controllers/eventController')
const emailController = require('../controllers/emailController')
const upload = require('../controllers/uploadImage')

const mainRouter = express.Router()

mainRouter.route('/publications')
  .get(pubController.getPublications)
  .post(upload.single('file'), pubController.insertPublication)

mainRouter.route('/publications/:pubid')
  .get(pubController.getPublicationByID)
  .delete(pubController.deletePublication)

mainRouter.route('/customs')
  .get(cusController.getReviews)
  .post(upload.single('file'), cusController.createReview)

mainRouter.route('/customs/:cusid')
  .get(cusController.getReviewByID)
  .delete(cusController.deleteCustom)

mainRouter.route('/events')
  .get(eveController.getEvents)
  .post(eveController.createEvent)

mainRouter.route('/events/:eveid')
  .get(eveController.getEventByID)
  .delete(eveController.deleteEvent)

mainRouter.route('/emails')
  .get(emailController.getEmails)
  .post(emailController.createEmail)

mainRouter.route('/sendEmail')
  .post(emailController.sendEmail)

mainRouter.route('/emails/:emailid')
  .get(emailController.getEmailByID)
  .delete(emailController.deleteEmail)

module.exports = mainRouter