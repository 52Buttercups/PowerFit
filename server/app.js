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

const { db } = require('./database/index');
const { Users } = require('./database/models/schema');
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

app.get('/exercises', controller.getAllExercises);
app.get('/exercises/:name', controller.getExercisesByName);
app.get('/workouts', controller.getAllWorkouts);
app.get('/workouts/:name', controller.getWorkoutsByName);
app.use('/login', controller.loginUser);
app.use('/register', controller.registerUser);
app.use('/logout', controller.logoutUser);

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

// Modularized Routes
// const login = require('./routes/login');
// const register = require('./routes/register');
// const logout = require('./routes/logout');

// app.use('/login', login);
// app.use('/register', register);
// app.use('/logout', logout);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
