const users = {
  usersId: Number,
  username: String,
  password: String,
  favorites: Array,
};

const workouts = {
  workoutsId: Number,
  name: String,
  exercises: Array,
};

const exercises = {
  exercisesId: Number,
  name: String,
  instructions: String,
  video: String,
  muscleGroups: Array,
  equipment: Array,
};

const muscleGroups = {
  muscleGroupsId: Number,
  name: String,
};

const equipment = {
  equipmentId: Number,
  name: String,
};

module.exports = {
  users,
  workouts,
  exercises,
  muscleGroups,
  equipment,
};
