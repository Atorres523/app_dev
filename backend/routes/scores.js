// Purpose of file: 
// dictates what happens when a route is hit
// this handles post, get, delete, and patch requests

const express = require('express');
const router = express.Router();

// import controller functions
const {
    createScore,
    getScores,
    getUserScore,
    deleteScore,
    updateScore
} = require('../controllers/scoreController');


// Get all highscores
router.get('/', getScores);

// Get a single highscore
router.get('/:id', getUserScore);

// Post a new highscore
router.post('/', createScore);

// Delete a new highscore
router.delete('/:id', deleteScore);

// Update a highscore
router.patch('/:id', updateScore);

module.exports = router;