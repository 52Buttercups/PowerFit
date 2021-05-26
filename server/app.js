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
const models = require('./database/index');

const PORT = process.env.PORT || 5000;
const app = express();
// Destructured Models
const {User, Workout, Exercise, MuscleGroup, Equipment} = models;

app.use(express.json());
app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

// Selects local-strategy and configures it
passport.use(User.createStrategy());
// Serializes - Adds the session cookie
passport.serializeUser(User.serializeUser());
// Deserializes - Retrieves the user info
passport.deserializeUser(User.deserializeUser());

app.get('/api/authenticated', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.send('We are authenticated');
});

app.get('/', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  try {
    console.log(req.session)
    res.status(200).json({ message: 'Hello from Buttercups Server' });
  } catch (err) {
    console.error(err);
  }
});

// Modularized Routes
const login = require('./routes/login');
const register = require('./routes/register');
const logout = require('./routes/logout');

app.use('/login', login);
app.use('/register', register);
app.use('/logout', logout);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
