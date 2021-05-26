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
  models.Workouts.find({})
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err.message);
      res.send(400);
    });
};

const getWorkoutsByName = (req, res) => {
  models.Workouts.find({ name: req.params.name })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err.message);
      res.send(400);
    });
};

/*
* UserWorkouts Model
*/
const createUserWorkout = (req, res) => {
  const userWorkout = req.body;
  models.UserWorkouts.create(userWorkout)
    .then((results) => {
      console.log(results);
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err.message);
      res.send(400);
    });
};

module.exports = {
  getAllExercises,
  getExercisesByName,
  getAllWorkouts,
  getWorkoutsByName,
  createUserWorkout,
};
