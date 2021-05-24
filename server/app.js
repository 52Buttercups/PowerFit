const express = require('express');
const logger = require('morgan');
const bodyparser = require('body-parser');
const models = require('./db/index');

const PORT = process.env.PORT || 5000;
const app = express();

const Users = models.User;
const Workouts = models.Workout;
const Exercises = models.Exercise;
const MuscleGroups = models.MuscleGroup;
const Equipment = models.Equipment;

app.use(express.json());
app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  try {
    res.status(200).json({ message: 'Hello from Buttercups Server' });
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;