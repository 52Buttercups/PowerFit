const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const schema = require('./models/schema');

const mongoUri = 'mongodb://localhost/powerfit';

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

db
  .then(() => console.log(`Connected to: ${mongoUri}`))
  .catch((err) => {
    console.log(`There was a problem connecting to mongo at: ${mongoUri}`);
    console.error(err);
  });

schema.users.plugin(passportLocalMongoose);
const Users = mongoose.model('User', schema.users);
const Workouts = mongoose.model('Workout', schema.workouts);
const Exercises = mongoose.model('Exercise', schema.exercises);
const UserWorkouts = mongoose.model('UserWorkOut', schema.userWorkouts);

module.exports = {
  db,
  Users,
  Exercises,
  Workouts,
  UserWorkouts,
};
