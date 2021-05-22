const mongoose = require('mongoose');
const schemas = require('./models/schemas');
const mongoUri = 'mongodb://localhost/powerfit'

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const User = mongoose.model('User', schemas.users);
const Workout = mongoose.model('Workout', schemas.workouts);
const Exercise = mongoose.model('Exercise', schemas.exercises);
const MuscleGroup = mongoose.model('MuscleGroup', schemas.muscleGroups);
const Equipment = mongoose.model('Equipment', schemas.equipment);

module.exports = {
  User,
  Workout,
  Exercise,
  MuscleGroup,
  Equipment
};