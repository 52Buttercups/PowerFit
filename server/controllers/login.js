const express = require('express');

const router = express.Router();
const passport = require('passport');

router.post('/', (req, res, next) => {
  // Automatically passes in username and password from the request body to authenticate
  passport.authenticate('local',
    (err, user, info) => {
      // If there's an error responds with appropriate error.
      if (err) {
        console.log(err);
        return res.status(400).json({ message: 'Unable to login user!', error: `${err}` });
      }
      // If unable to login user due to wrong username or password, responds with appropriate error.
      if (!user) {
        console.log(info);
        return res.status(400).json({ message: 'Unable to login user!', loggedIn: false, error: `${info}` });
      }
      // Logs the user in and responds with session cookie
      req.logIn(user, (err) => {
        if (err) {
          console.log9;
        }

        res.status(201).json({ message: `${req.body.username} is now logged in.`, loggedIn: true, username: `${req.body.username}` });
      });
    })(req, res, next);
});

module.exports = router;
