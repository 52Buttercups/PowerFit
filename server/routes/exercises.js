const express = require('express');
const models = require('../database/index');

const { Exercise } = models;
const router = express.Router();

router.get('/', (req, res) => {
  Exercise.find({})
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(401);
    });
});

router.get('/:id', (req, res) => {
  Exercise.findOne({ exerciseId: req.params.id })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(401);
    });
});

module.exports = router;
