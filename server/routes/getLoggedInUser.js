const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.passport) {
    console.log('Current Logged User:', req.session.passport.user);
    res.status(200).json({ message: `Current Logged User: ${req.session.passport.user}`, isUserLoggedIn: true, user: `${req.session.passport.user}` });
  }
  res.status(401).json({ message: 'No Current Logged User', isUserLoggedIn: false });
});

module.exports = router;
