const mongoose = require('mongoose');
const {Schema} = mongoose;
const schemas = require('./models/schemas');

const mongoUri = 'mongodb://localhost/powerfit';
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => console.log('connected!'));

// const User = mongoose.model('User', schemas.users);
const Workout = mongoose.model('Workout', schemas.workouts);
const Exercise = mongoose.model('Exercise', schemas.exercises);
const MuscleGroup = mongoose.model('MuscleGroup', schemas.muscleGroups);
const Equipment = mongoose.model('Equipment', schemas.equipment);

const UserDetail = new Schema({
  usersId: Number,
  username: String,
  password: String,
  favorites: Array,
});

UserDetail.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserDetail)
module.exports = {
  User,
  Workout,
  Exercise,
  MuscleGroup,
  Equipment,
};
