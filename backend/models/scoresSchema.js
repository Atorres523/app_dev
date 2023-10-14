// Purpose of file:
// creates a schema for the scores collection in the database
// then exports the schema as a model to be used in other files

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Defines the structures of the documents we save to the database
const scoresSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
}, {timestamps: true});

// creates a model which will be imported to other files
module.exports = mongoose.model('Scores', scoresSchema);

//scoresSchema.find()