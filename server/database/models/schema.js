const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

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
  username: {
    type: String,
    unique: true,
  },
  password: String,
});

const userWorkouts = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  workouts: [workouts],
});

users.plugin(passportLocalMongoose);
const Users = mongoose.model('User', users);
const Workouts = mongoose.model('Workout', workouts);
const Exercises = mongoose.model('Exercise', exercises);
const UserWorkouts = mongoose.model('UserWorkOuts', userWorkouts);

module.exports = {
  Users,
  Workouts,
  Exercises,
  UserWorkouts,
};
