// purpose of  file:
// hold controll functions which are called when a route is hit in the server.js file
// these functions are called from the routes folder to prevent the scores.js file 
//from getting to big

const Scores = require('../models/scoresSchema');
const mongoose = require('mongoose');

// get all scores sorted by score
const getScores = async (req, res) => {
    const scores = await Scores.find({}).sort({score: -1});
    res.status(200).json({scores});
};

// get a single score
const getUserScore = async (req, res) => {
    const {id} = req.params;
    
    // if not a valid id return error
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid ID'});
    }

    const score = await Scores.findById(id);
    if (!score) {
        res.status(400).json({error: 'No score found'});
    }
    else{
        res.status(200).json({score});
    }
};

// create a new score
const createScore = async (req, res) => {
    const {userID, score: newScore} = req.body;
    // add doc to db
    try {
        const score = await Scores.create({userID, score: newScore});
        res.status(200).json({score});
    } catch (error) {
        res.status(400).json({error: error.message});
        console.log(error);
    }
};

// delete a score
const deleteScore = async (req, res) => {
    const { id } = req.params;

    // if not a valid id return error
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid ID'});
    }
    const score = await Scores.findOneAndDelete({_id: id});
    if (!score) {
        res.status(400).json({error: 'No score found'});
    }
    else{
        res.status(200).json({score});
    }
};

// update a score
const updateScore = async (req, res) => {
    const { id } = req.params;

    // if not a valid id return error
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid ID'});
    }
    const score = await Scores.findByIdAndUpdate({_id: id}, {
        ...req.body
    });

    if (!score) {
        res.status(400).json({error: 'No score found'});
    }
    else{
        res.status(200).json({score});
    }
};

// export functions
module.exports = {
    getScores,
    getUserScore,
    createScore,
    deleteScore,
    updateScore
};