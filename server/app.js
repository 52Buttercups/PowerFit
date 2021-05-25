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

const UserInfo = models.UserInfo;
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

app.get('/', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
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
        console.log(err);
        return res.status(400).json({ message: 'Unable to login user!', error: `${err}` });
      }

      if (!user) {
        console.log(info);
        return res.status(400).json({ message: 'Unable to login user!', loggedIn: false, error: `${info}` });
      }

      req.logIn(user, (err) => {
        if (err) {
          console.log();
        }

        res.status(201).json({ message: `${req.body.username} is now logged in.`, loggedIn: true, username: `${req.body.username}` });
      });
    })(req, res, next);
});

app.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'User has been logged out.', loggedIn: false });
});

app.post('/register', (req, res) => {
  Users.register(new Users({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ message: `${req.body.username} has failed to be created.`, error: `${err}` });
    }
    passport.authenticate('local')(req, res, () => {
      res.status(201).json({ message: `${req.body.username} has been created.` });
    });
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
