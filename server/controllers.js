const models = require('./database/index');

/*
* Exercise Model
*/
const getAllExercises = (req, res) => {
  models.Exercises.find({})
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err.message);
      res.send(400);
    });
};

const getExercisesByName = (req, res) => {
  models.Exercises.findOne({ name: req.params.name })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err.message);
      res.send(400);
    });
};

/*
* Workout Model
*/
const getAllWorkouts = (req, res) => {
  /*
  * Get all general workouts from the workouts table.
  */
  models.Workouts.find({})
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err.message);
      res.send(400);
    });
};

const getAllWorkoutsByName = (req, res) => {
  /*
  * Get all general workouts from the workouts table by workoutname.
  */
  models.Workouts.find({ name: req.params.name })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err.message);
      res.send(400);
    });
};

const createWorkouts = (req, res) => {
  /*
  * Creates a general workout in the workouts table.
  */
  const workout = req.body;
  models.Workouts.create(workout)
    .then((results) => {
      res.status(201).json(results);
    })
    .catch((err) => {
      console.err(err.message || err);
      res.send(400);
    });
};

module.exports = {
  getAllExercises,
  getExercisesByName,
  getAllWorkouts,
  getAllWorkoutsByName,
  createWorkouts,
};
