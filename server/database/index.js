const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const schemas = require('./models/schemas');

const mongoUri = 'mongodb://localhost/powerfit';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const dbConnect = mongoose.connection;

<<<<<<< HEAD
const UserInfo = mongoose.model('UserInfo', schemas.users);
=======
schemas.users.plugin(passportLocalMongoose);
const User = mongoose.model('User', schemas.users);
>>>>>>> 93c3be962c21737dc368e763948cb4193af2d1c8
const Workout = mongoose.model('Workout', schemas.workouts);
const Exercise = mongoose.model('Exercise', schemas.exercises);
const MuscleGroup = mongoose.model('MuscleGroup', schemas.muscleGroups);
const Equipment = mongoose.model('Equipment', schemas.equipment);

module.exports = {
  UserInfo,
  Workout,
  Exercise,
  MuscleGroup,
  Equipment,
  dbConnect,
};
