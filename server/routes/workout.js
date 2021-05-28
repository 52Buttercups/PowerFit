const express = require('express');
const models = require('../database/index');

const { Exercise, Workout } = models;
const router = express.Router();

router.get('/', async (req, res) => {
  // This route should send back users workouts
  try {
    const workouts = await Workout.find({});
    const workoutsWithExercises = [];
    const results = ['1'];
    let response = await Promise.all(workouts.forEach(async (workout) => {
      workout.exercises.forEach((exerciseId) => {
        let exercise = await Promise.all(async Exercise.findOne({ exerciseId }));
      });
    }));

    res.status(200).json(workoutsWithExercises);
  } catch (err) {
    console.error(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const workout = await Workout.findOne({ workoutId: req.params.id });

    const exercises = await Promise.all(workout.exercises.map(async (exerciseId) => {
      const exercise = await Exercise.findOne({ exerciseId });
      return exercise;
    }));

    delete workout.exercises;

    workout.exercises = exercises;
    res.status(200).json(workout);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
