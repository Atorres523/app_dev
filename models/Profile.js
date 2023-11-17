const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  breed: {
    type: String,
  },
  location: { //city
    type: String,
  },
  age: {
    type: Number,
  },
  size: {
    type: String,
    enum: ['Small', 'Medium', 'Large']
  },
  gender: {
    type: String,
    enum: ['Male', 'Female']
  },
  bio: {
    type: String,
  },
  temperament: {
    type: String,
  },
  favorite_activities: {
    type: String,
  },
  availability: {
    type: Boolean,
    default: false,
  },
  health_info: [
    {
      allergies: {
        type: String,
      },
      special_needs: {
        type: String,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
