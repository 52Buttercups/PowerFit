const mongoose = require('mongoose');

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
    console.log(err);
  });

module.exports = db;
