const express = require('express');
const logger = require('morgan');
const bodyparser = require('body-parser');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
});
const passport = require('passport');
const connectEnsureLogin = require('connect-ensure-login');
const models = require('./database/index');

const PORT = process.env.PORT || 5000;
const app = express();

const Users = models.User;
const Workouts = models.Workout;
const Exercises = models.Exercise;
const MuscleGroups = models.MuscleGroup;
const { Equipment } = models;

app.use(express.json());
app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

passport.use(Users.createStrategy());
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

app.get('/', async (req, res) => {
  try {
    res.status(200).json({ message: 'Hello from Buttercups Server' });
  } catch (err) {
    console.error(err);
  }
});

app.post('/login', (req, res, next) => {
  passport.authenticate('local',
    (err, user, info) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        console.log(info);
        return res.redirect(`/login?info=${info}`);
      }

      req.logIn(user, (error) => {
        if (error) {
          return next(error);
        }

        return res.redirect('/');
      });
    })(req, res, next);
});

app.get('/login', (req, res) => {
  res.send('Welcome to the login page!');
});

app.post('/register', (req, res) => {
  Users.register(new Users({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      return res.render('register', { user });
    }
    passport.authenticate('local')(req, res, () => {
      res.redirect('/');
    });
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
