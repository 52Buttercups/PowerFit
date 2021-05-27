const express = require('express');
const logger = require('morgan');
const bodyparser = require('body-parser');
// Creates session cookies
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
});
// Authentication Framework - Passportjs
const passport = require('passport');
// Authenticate routes via: connectEnsureLogin.ensureLoggedIn()
const connectEnsureLogin = require('connect-ensure-login');
// Importing of the mongodb models

// eslint-disable-next-line no-unused-vars
const { db, Users } = require('./database/index');
const controller = require('./controllers');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

// Selects local-strategy and configures it
passport.use(Users.createStrategy());
// Serializes - Adds the session cookie
passport.serializeUser(Users.serializeUser());
// Deserializes - Retrieves the user info
passport.deserializeUser(Users.deserializeUser());

/** ***********************************************************
*          Exercises Routes
************************************************************ */
app.get('/exercises', connectEnsureLogin.ensureLoggedIn(), controller.getAllExercises);
app.get('/exercises/:name', connectEnsureLogin.ensureLoggedIn(), controller.getExercisesByName);
app.post('/exercises', connectEnsureLogin.ensureLoggedIn(), controller.createExercise);

/** ***********************************************************
*          General Workouts Routes
************************************************************ */
app.get('/workouts', connectEnsureLogin.ensureLoggedIn(), controller.getAllWorkouts);
app.get('/workouts/:name', connectEnsureLogin.ensureLoggedIn(), controller.getAllWorkoutsByName);
app.post('/workouts', connectEnsureLogin.ensureLoggedIn(), controller.createWorkouts);

/** ***********************************************************
*          User Workouts Routes
************************************************************ */
app.get('/userworkouts', connectEnsureLogin.ensureLoggedIn(), controller.getAllUserWorkouts);
app.get('/userworkouts/:name', connectEnsureLogin.ensureLoggedIn(), controller.getWorkoutsByUser);
app.post('/userWorkouts', connectEnsureLogin.ensureLoggedIn(), controller.createUserWorkout);
app.put('/userWorkouts', connectEnsureLogin.ensureLoggedIn(), controller.addFavoriteWorkout);

app.get('/api/authenticated', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.send('We are authenticated');
});

app.get('/', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  try {
    console.log(req.session);
    res.status(200).json({ message: 'Hello from Buttercups Server' });
  } catch (err) {
    console.error(err);
  }
});

/** ***********************************************************
*         Login and Auth Routes
************************************************************ */
const login = require('./routes/login');
const register = require('./routes/register');
const logout = require('./routes/logout');

app.use('/login', login);
app.use('/register', register);
app.use('/logout', logout);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
