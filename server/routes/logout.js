const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // Deletes the session cookie
  req.logout();
  res.status(200).json({ message: 'User has been logged out.', loggedIn: false });
});

module.exports = router;
