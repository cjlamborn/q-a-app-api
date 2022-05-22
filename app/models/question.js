const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  answer: [answerSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
   toObject: {
      // remove `hashedPassword` field when we call `.toObject`
      transform: (_doc, user) => {
        delete user.hashedPassword
        return user
      }
    }
})

module.exports = mongoose.model('Question', questionSchema)