const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.passport) {
    const { user } = req.session.passport;
    res.status(200).json({ message: `Current Logged User: ${user}`, isUserLoggedIn: true, user: `${user}` });
  } else {
    res.status(401).json({ message: 'No Current Logged User', isUserLoggedIn: false });
  }
});

module.exports = router;
