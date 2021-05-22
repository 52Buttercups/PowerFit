const express = require("express");
const logger = require("morgan");
const bodyparser = require("body-parser");
const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(logger("dev"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);

app.get("/", async (req, res) => {
  try {
    res.status(200).json({ message: "Hello from Buttercups Server" });
  } catch (err) {
    console.error(err);
  }
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
