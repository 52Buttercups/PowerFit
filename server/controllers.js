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
      console.error(error);
      res.status(401).json({ message: `Exercise: "${req.body.name}" has failed to be created.` });
    });
};

/*
* General Workout Model
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
  models.Workouts.findOneAndUpdate(
    { name: workout.name }, { exercises: workout.exercises }, { upsert: true, new: true },
  )
    .then((results) => {
      res.status(201).json(results);
    })
    .catch((err) => {
      console.error(err.message || err);
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

const createUserWorkout = (req, res) => {
  const { username } = req.body;
  const { workouts } = req.body;
  models.UserWorkouts.findOneAndUpdate({ username }, { $push: { workouts } })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err.message);
      res.send(400);
    });
};

const addFavoriteWorkout = (req, res) => {
  const { username, workoutId, isFavorite } = req.body;
  models.UserWorkouts.update({ 'workouts._id': workoutId, username }, { $set: { 'workouts.$.isFavorite': isFavorite } })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err.message);
      res.send(400);
    });
};

const deleteUserWorkout = (req, res) => {
  const { username, workoutId } = req.body;
  models.UserWorkouts.update(
    { username }, { $pull: { workouts: { _id: workoutId } } },
  )
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
  getAllWorkoutsByName,
  getAllUserWorkouts,
  getWorkoutsByUser,
  createUserWorkout,
  createExercise,
  createWorkouts,
  addFavoriteWorkout,
  deleteUserWorkout,
};
