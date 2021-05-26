const passport = require('passport');
const models = require('./database/models/schema');

/*
* Authentication and Authorization
*/
const registerUser = (req, res) => {
  // Uses passport-local-mongoose's register function to automatically add a salt and hash
  models.User.register(
    new models.User({ username: req.body.username }),
    req.body.password, (err) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: `${req.body.username} has failed to be created.`, error: `${err}` });
      }
      // Logs the user in once a user has successfully registered
      passport.authenticate('local')(req, res, () => {
        res.status(201).json({ message: `${req.body.username} has been created.`, username: req.body.username });
      });
    },
  );
};

const logoutUser = (req, res) => {
  // Deletes the session cookie
  req.logout();
  res.status(200).json({ message: 'User has been logged out.', loggedIn: false });
};

const loginUser = (req, res, next) => {
  // Automatically passes in username and password from the request body to authenticate
  passport.authenticate('local',
    (err, user, info) => {
      // If there's an error responds with appropriate error.
      if (err) {
        console.log(err);
        return res.status(400).json({ message: 'Unable to login user!', error: `${err}` });
      }
      // If unable to login user due to wrong username or password, responds with appropriate error.
      if (!user) {
        console.log(info);
        return res.status(400).json({ message: 'Unable to login user!', loggedIn: false, error: `${info}` });
      }
      // Logs the user in and responds with session cookie
      req.logIn(user, (error) => {
        if (error) {
          console.log9;
        }

        res.status(201).json({ message: `${req.body.username} is now logged in.`, loggedIn: true, username: `${req.body.username}` });
      });
    })(req, res, next);
};

/*
* Exercise Model
*/
const getAllExercises = (req, res) => {
  models.Exercises.find({})
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err.message);
      res.send(400);
    });
};

const getExercisesByName = (req, res) => {
  models.Exercises.findOne({ name: req.params.name })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err.message);
      res.send(400);
    });
};

/*
* Workout Model
*/
const getAllWorkouts = (req, res) => {
  models.Workouts.find({})
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err.message);
      res.send(400);
    });
};

const getWorkoutsByName = (req, res) => {
  models.Workouts.find({ name: req.params.name })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err.message);
      res.send(400);
    });
};

module.exports = {
  registerUser,
  getAllExercises,
  getExercisesByName,
  getAllWorkouts,
  getWorkoutsByName,
  logoutUser,
  loginUser,
};
