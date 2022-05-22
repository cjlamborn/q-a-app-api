const express = require('express')
const passport = require('passport')
const Question = require('../models/question.js')
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existent document is requested
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /examples
router.get('/questions', requireToken, (req, res, next) => {
  Question.find({ owner: req.user.id })
    .then((questions) => {
      return questions.map((questions) => questions.toObject())
    })
  // respond with status 200 and JSON of the examples
    .then((questions) => res.status(200).json({ questions: questions }))
  // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
router.get('/questions/:id', requireToken, (req, res, next) => {

  Question.findById(req.params.id)
    .then(handle404)
    // if `findById` is successful, respond with 200 and "example" JSON
    .then(question => res.status(200).json({ question: question.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE
// POST
router.post('/questions', requireToken, (req, res, next) => {
  // set owner of new example to be current user
  req.body.question.owner = req.user.id

  Question.create(req.body.question)
    .then(question => {
      res.status(201).json({ question: question.toObject() })
    })
    .catch(next)
})

// UPDATE
router.patch('/questions/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.question.owner

  Question.findById(req.params.id)
    .then(handle404)
    .then(question => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, question)

      question.set(req.body.question)
      return question.save()
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// DELETE 
router.delete('/questions/:id', requireToken, (req, res, next) => {
  Question.findById(req.params.id)
    .then(handle404)
    .then(question => {
      // throw an error if current user doesn't own `example`
      requireOwnership(req, question)
      // delete the example ONLY IF the above didn't throw
      question.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router