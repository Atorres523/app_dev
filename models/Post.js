const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, // associate user by id
        ref: 'users' // reference the collection
    },
    text: {
        type: String,
        required: true
    },
    name: { // name of the user
        type: String
    },
    avatar: { // avatar of the user
        type: String
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId, 
                ref: 'users' 
            }
        }
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId, 
                ref: 'users' 
            },
            text: {
                type: String,
                required: true
            },
            name: { 
                type: String
            },
            avatar: { 
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],  
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = Post = mongoose.model('post', PostSchema);
