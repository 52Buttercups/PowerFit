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

const createExercise = (req, res) => {
  const {
    name, instructions, video, muscleGroups, equipment,
  } = req.body;
  models.Exercises.create({
    name,
    instructions,
    video,
    muscleGroups: [{
      name: muscleGroups,
    }],
    equipment: [{
      name: equipment,
    }],
  })
    .then(() => {
      res.status(201).json({ message: `Exercise: "${req.body.name}" has been created.` });
    })
    .catch((error) => {
      console.log(error);
      res.status(401).json({ message: `Exercise: "${req.body.name}" has failed to be created.` });
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
* User Workout Model
*/
const getAllUserWorkouts = (req, res) => {
  models.UserWorkouts.find({})
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err.message);
      res.send(400);
    });
};

const getWorkoutsByUser = (req, res) => {
  models.UserWorkouts.find({ username: req.params.name })
    .then((results) => {
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
  getAllUserWorkouts,
  getWorkoutsByUser,
  createExercise,
};
