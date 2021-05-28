const express = require('express');

const router = express.Router();
const passport = require('passport');

const models = require('../database/index');

const { Users, UserWorkouts } = models;

router.post('/', (req, res) => {
  // Uses passport-local-mongoose's register function to automatically add a salt and hash
  Users.register(new Users({ username: req.body.username }), req.body.password, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ message: `${req.body.username} has failed to be created.`, error: `${err}` });
    }

    // Create new document in userworkouts
    const { username } = req.body;
    UserWorkouts.create({ username, workouts: [] })
      .then(() => {
        // res.status(201).json({ message: `Userworkout for ${username} has been created.` });
      })
      .catch((error) => {
        console.error(error);
        res.status(401).json({ message: `Userworkout for ${username} has failed to be created.` });
      });

    // Logs the user in once a user has successfully registered
    passport.authenticate('local')(req, res, () => {
      res.status(201).json({ message: `${req.body.username} has been created.`, username: req.body.username });
    });
  });
});

module.exports = router;
