const express = require('express')
const passport = require('passport')

const Question = require('../models/question.js')
const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
// const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// CREATE
// POST
router.post('/answers', requireToken, (req, res, next) => {
  const answerData = req.body.answer
  const questionId = answerData.questionId
  Question.findById(questionId)
    // respond to successful `create` with status 201 and JSON of new "example"
    .then(handle404)
    .then(question => {
      requireOwnership(req, question)
      question.answer.push(answerData)
      return question.save()
    })
    .then(question => {
      res.status(201).json({ question: question.toObject() })
    })
    .catch(next)
})

// DESTROY
// DELETE /examples/5a7db6c74d55bc51bdf39793
router.delete('/questions/:qid/answers/:answerId', requireToken, (req, res, next) => {
  const questionId = req.params.qid
  const answerId = req.params.answerId
  Question.findById(questionId)
    .then(handle404)
    .then((question) => {
      // throw an error if current user doesn't own `example`
      requireOwnership(req, question)
      // delete the example ONLY IF the above didn't throw
      question.answer.id(answerId).remove()
      return question.save()
    })
  // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
  // if an error occurs, pass it to the handler
    .catch(next)
})

// UPDATE
// PATCH /examples/5a7db6c74d55bc51bdf39793
router.patch('/questions/:qid/answers', requireToken, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  const questionId = req.params.qid
  const answerData = req.body.answer
  const answerId = req.body.answer.answerId

  Question.findById(questionId)
    .then(handle404)
    .then((question) => {
      requireOwnership(req, question)
      const answer = question.answer.id(answerId)
      answer.set(answerData)
      return question.save()
    })
  // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
  // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
