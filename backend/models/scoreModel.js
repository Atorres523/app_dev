const mongoose = require('mongoose')

const Schema = mongoose.Schema

const scoreSchema = new Schema({
  // email: {
  //   type: String,
  //   required: true
  // },
  // password: {
  //   type: String,
  //   required: true
  // },
  userID: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
}, { timestamps: true })

module.exports = mongoose.model('Score', scoreSchema)