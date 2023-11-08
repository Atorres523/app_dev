const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const scoreSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  score: {
    type: Number,
    default: 0
  },
}, { timestamps: true })

// static signup method
scoreSchema.statics.signup = async function (email, password, userID) {

  // validation
  if(!email || !password || !userID) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Invalid email')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const email_exists = await this.findOne({ email })
  const userID_exists = await this.findOne({ userID })
  if (email_exists) {
    throw Error('email already in use')
  }
  if (userID_exists) {
    throw Error('userID already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const score = await this.create({ email, password: hash, userID })

  return score
}

scoreSchema.statics.login = async function (email, password) {
  
  if(!email || !password) {
    throw Error('All fields must be filled')
  }
  const user = await this.findOne({ email })
  // const userID_exists = await this.findOne({ userID })
  if (!user) {
    throw Error('incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    throw Error('incorrect password')
  }
  return user
}

module.exports = mongoose.model('Score', scoreSchema)