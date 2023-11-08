const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  name: { // name of the user
    type: String
  },
  avatar: {
    type: String
  },
  likes: [ // array of users that liked the post
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
      text: { // every comment needs text
        type: String,
        required: true
      },
      name: { // name of the user who made the comment
        type: String
      },
      avatar: {
        type: String
      },
      date: { // date of the comment
        type: Date, 
        default: Date.now
      }
    }
  ],
  date: { // date of the post
    type: Date, 
    default: Date.now
  }
})

module.exports = Post = mongoose.model('post', PostSchema)