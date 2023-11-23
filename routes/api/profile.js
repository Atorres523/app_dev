const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

//@route  GET api/profile/me
//@desc   Get current user's profile
//@access Private
router.get("/me", auth, async (req, res) => {
  try {  
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "avatar"]
    );

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) { 
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
  "/", auth, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { //grab info from req.body to submit to db
      breed, 
      location,
      age,
      size,
      gender,
      bio,
      temperament,
      favorite_activities,
      availability,
      allergies,
      special_needs,
    } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id; // will get user id from token
    if (breed) profileFields.breed = breed;
    if (location) profileFields.location = location;
    if (age) profileFields.age = age;
    if (size) profileFields.size = size;
    if (gender) profileFields.gender = gender;
    if (bio) profileFields.bio = bio;
    if (temperament) {
      profileFields.temperament = temperament.split(',')  // turns string into an array
        .map(temperament => temperament.trim());
    }
    if (favorite_activities) {
      profileFields.favorite_activities = favorite_activities.split(',')  
        .map(favorite_activities => favorite_activities.trim());
    }
    if (availability) profileFields.availability = availability;

    // Build health info object
    profileFields.health_info = {};
    if (allergies) {
      profileFields.health_info.allergies = allergies.split(',')  
        .map(allergies => allergies.trim());
    }
    if (special_needs) {
      profileFields.health_info.special_needs = special_needs.split(',')  
        .map(special_needs => special_needs.trim());
    }
    
    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if(profile) {
        // Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id }, 
          { $set: profileFields }, 
          { new: true }
          );

          return res.json(profile);
      }

      // Create
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
