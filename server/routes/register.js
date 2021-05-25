
const express = require('express');
const router = express.Router();
const passport = require('passport');

const models = require('../database/index');
const {User} = models;

router.post('/', (req, res) => {
  // Uses passport-local-mongoose's register function to automatically add a salt and hash
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ message: `${req.body.username} has failed to be created.`, error: `${err}` });
    }
    // Logs the user in once a user has successfully registered
    passport.authenticate('local')(req, res, () => {
      res.status(201).json({ message: `${req.body.username} has been created.` });
    });
  });
});

module.exports = router;
