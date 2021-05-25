const express = require('express');
const models = require('../database/index');

const Workouts = models.Workout;
const Exercise = models.Exercise;
const router = express.Router();

router.get('/', (req, res) => {
  // This route should send back users workouts
  Workouts.find({})
    .then((result) => {
      res.status(200).json(result);
      res.end();
    })
    .catch((err) => {
      console.log('err', err);
      res.status(400);
    });
});

router.get('/:id', async (req, res) => {
  try {
    const workout = await Workouts.findOne({ workoutId: req.params.id });

    const exercises = await Promise.all(workout.exercises.map(async (exerciseId) => {
      const exercise = await Exercise.findOne({ exerciseId });
      return exercise;
    }));
    console.log('example', exercises);

    delete workout.exercises;

    workout.exercises = exercises;
    res.status(200).json(workout);
  } catch (err) {
    console.log('err', err);
  }
});

module.exports = router;
