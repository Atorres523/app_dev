const Score = require('../models/userModel')
const mongoose = require('mongoose')

// get all scores
const getScores = async (req, res) => {
  const scores = await Score.find({}).sort({score: -1})

  res.status(200).json(scores)
}

// get a single score
const getScore = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such score'})
  }

  const score = await Score.findById(id)

  if (!score) {
    return res.status(404).json({error: 'No such score'})
  }

  res.status(200).json(score)
}

// create a new score
const createScore = async (req, res) => {
  const {userID, score:newScore} = req.body

  let emptyFields = []
  if (!userID) {
    emptyFields.push('userID')
  }
  if (!newScore) {
    emptyFields.push('score')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
  }

  // add to the database
  try {
    const score = await Score.create({ userID, score:newScore})
    res.status(200).json(score)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a score
const deleteScore = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such score'})
  }

  const score = await Score.findOneAndDelete({_id: id})

  if(!score) {
    return res.status(400).json({error: 'No such score'})
  }

  res.status(200).json(score)
}

// update a score
const updateScore = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such score'})
  }

  const score = await Score.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!score) {
    return res.status(400).json({error: 'No such score'})
  }

  res.status(200).json(score)
}

module.exports = {
  getScores,
  getScore,
  createScore,
  deleteScore,
  updateScore
}