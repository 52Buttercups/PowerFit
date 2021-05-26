const mongoose = require('mongoose');

const exercises = new mongoose.Schema({
  name: String,
  instructions: String,
  video: String,
  muscleGroups: [{
    name: String,
  }],
  equipment: [{
    name: String,
  }],
});

const workouts = new mongoose.Schema({
  name: String,
  isFavorite: Boolean,
  exercises: [exercises],
});

const users = new mongoose.Schema({
  username: String,
  password: String,
});

const userWorkouts = new mongoose.Schema({
  username: String,
  workouts: [workouts],
});

module.exports = {
  users,
  workouts,
  exercises,
  userWorkouts,
};
