const express = require('express')
const {
    getScores, 
    getScore, 
    createScore,
    deleteScore,
    updateScore
} = require('../controllers/scoreController')

const router = express.Router()

// GET all scores
router.get('/', getScores)

// GET a single score
router.get('/:id', getScore)

// POST a new score
router.post('/', createScore)

// DELETE a score
router.delete('/:id', deleteScore)

// UPDATE a score
router.patch('/:id', updateScore)

module.exports = router