const mongoose = require('mongoose');

const users = new mongoose.Schema({
  usersId: Number,
  username: String,
  password: String,
  favoriteWorkouts: Array,
});

const workouts = new mongoose.Schema({
  workoutsId: Number,
  name: String,
  exercises: Array,
});

const exercises = new mongoose.Schema({
  exercisesId: Number,
  name: String,
  instructions: String,
  video: String,
  muscleGroups: Array,
  equipment: Array,
});

const muscleGroups = new mongoose.Schema({
  muscleGroupsId: Number,
  name: String,
});

const equipment = new mongoose.Schema({
  equipmentId: Number,
  name: String,
});

module.exports = {
  users,
  workouts,
  exercises,
  muscleGroups,
  equipment,
};
