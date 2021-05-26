const express = require('express');
const models = require('../database/index');

const { Exercise, Workout } = models;
const router = express.Router();

router.get('/', async (req, res) => {
  // This route should send back users workouts
  try {
    const workouts = await Workout.find({});

    console.log('workouts', workouts);
    const workoutsWithExercises = [];

    // loop over workouts
    Promise.all(workouts.forEach(async (workout) => {
      // here is a workout with exercise ids
      const exercises = await Promise.all(workout.exercises.map(async (exerciseId) => {
        const exercise = await Exercise.findOne({ exerciseId });
        return exercise;
      }));
      console.log('should be a workout', workout);
      delete workout.exercises;

      workout[exercises] = exercises;
      console.log('should be workout with  exercises', workout);
      workoutsWithExercises.push(workout);
    }))
      .then((result) => console.log({result}))
      .catch((err) => {
        console.log(err);
      });

    res.status(200).json(workoutsWithExercises);
  } catch (err) {
    console.log('err', err);
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
    console.log('err', err);
  }
});

module.exports = router;
