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

const createExercise = (req,res) => {
  models.Exercises.create({
    name: req.body.name,
    instructions: req.body.instructions,
    video: req.body.video,
    muscleGroups: [{
      name: req.body.muscleGroups,
    }],
    equipment: [{
      name: req.body.equipment,
    }],
  })
    .then(() => {
      res.status(201).json({message: `Exercise: "${req.body.name}" has been created.`});
    })
    .catch((error) => {
      console.log(error);
      res.status(401).json({message: `Exercise: "${req.body.name}" has failed to be created.`});
    });
};

module.exports = {
  getAllExercises,
  getExercisesByName,
  getAllWorkouts,
  getWorkoutsByName,
  createExercise,
};
