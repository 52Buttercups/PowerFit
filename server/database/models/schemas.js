const mongoose = require('mongoose');

const users = new mongoose.Schema({
  userId: Number,
  username: String,
  password: String,
  favoriteWorkouts: Array,
});

const workouts = new mongoose.Schema({
  workoutId: Number,
  name: String,
  exercises: Array,
});

const exercises = new mongoose.Schema({
  exerciseId: Number,
  name: String,
  instructions: String,
  video: String,
  muscleGroups: Array,
  equipment: Array,
});

const muscleGroups = new mongoose.Schema({
  muscleGroupId: Number,
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
