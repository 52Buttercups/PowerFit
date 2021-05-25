const db = require('../index');

const userData = [
  {
    userId: 1,
    username: 'testUsername1',
    password: 'testPassword1',
    favoriteWorkouts: [1],
  },
  {
    userId: 2,
    username: 'testUsername2',
    password: 'testPassword2',
    favoriteWorkouts: [2],
  },
];

const workoutData = [
  {
    workoutId: 1,
    name: 'testWorkout1',
    exercises: [1, 2, 3],
  },
  {
    workoutId: 2,
    name: 'testWorkout2',
    exercises: [2, 1, 3],
  },
];

const exerciseData = [
  {
    exerciseId: 1,
    name: 'air squats',
    instructions: 'Stand up with your feet shoulder-width apart. Bend your knees, press your hips back and stop the movement once the hip joint is slightly lower than the knees. Press your heels into the floor to return to the initial position. Repeat until set is complete. PROPER FORM AND BREATHING PATTERN.',
    video: 'youtube.com',
    muscleGroups: [1],
    equipment: [2],
  },
  {
    exerciseId: 2,
    name: 'pushups',
    instructions: '1. Get down on all fours, placing your hands slightly wider than your shoulders. 2. Straighten your arms and legs. 3. Lower your body until your chest nearly touches the floor. 4. Pause, then push yourself back up. 5. Repeat.',
    video: 'youtube.com',
    muscleGroups: [2, 5, 4],
    equipment: [2],
  },
  {
    exerciseId: 3,
    name: 'pullups',
    instructions: 'Grab the pullup bar with your palms down (shoulder-width grip). Hang to the pullup-bar with straight arms and your legs off the floor. Pull yourself up by pulling your elbows down to the floor. Go all the way up until your chin passes the be bar. Lower yourself until your arms are straight.',
    video: 'youtube.com',
    muscleGroups: [6, 7],
    equipment: [4],
  },
  {
    exerciseId: 4,
    name: 'forward lunges',
    instructions: 'Step forward into lunge, then step back to feet together. Can do alternating or one side at a time. Make sure knees don’t go past toes Keep legs in train tracks',
    video: '',
    muscleGroups: [1],
    equipment: [2],
  },
  {
    exerciseId: 5,
    name: 'backward lunges',
    instructions: 'Instead of stepping forward, take one leg back, then step back with feet together. Can do alternating or one side at a time. Make sure knees don’t go past toes. Keep legs in train tracks',
    video: '',
    muscleGroups: [1],
    equipment: [2],
  },
  {
    exercisesId: 6,
    name: 'hip thrusts',
    instructions: 'Lay down on the floor on your back, with knees bent, feet flat on the floor. Lift hips up and down. Drive weight into heels. Also works hamstrings and lower back. For an extra challenge, lift one leg in the air at a time and do the same movement. Don’t alternate, do several repetitions on one side then the other',
    video: '',
    muscleGroups: [1],
    equipment: [2],
  },
  {
    exerciseId: 7,
    name: 'leg lifts',
    instructions: 'Tabletop position, lift one leg in the air behind you up and down (can do different variations with bent knee/straight leg etc)',
    muscleGroups: [1],
    equipment: [2],
  },
  {
    exerciseId: 8,
    name: 'squats',
    instructions: 'Stand up with your feet shoulder-width apart. Bend your knees, press your hips back and stop the movement once the hip joint is slightly lower than the knees. Press your heels into the floor to return to the initial position. Repeat until set is complete. PROPER FORM AND BREATHING PATTERN.',
    muscleGroups: [1],
    equipment: [5],
  },
];

const muscleGroupsData = [
  {
    muscleId: 1,
    name: 'legs',
  },
  {
    muscleId: 2,
    name: 'chest',
  },
  {
    muscleId: 3,
    name: 'back',
  },
  {
    muscleId: 4,
    name: 'tricep',
  },
  {
    muscleId: 5,
    name: 'core',
  },
  {
    muscleId: 6,
    name: 'bicep',
  },
  {
    muslceId: 7,
    name: 'lats',
  },
  {
    muscleId: 8,
    name: 'shoulders',
  },
];

const equipmentData = [
  {
    equipmentId: 1,
    name: 'dumbbells',
  },
  {
    equipmentId: 2,
    name: 'none',
  },
  {
    equipmentId: 3,
    name: 'treadmill',
  },
  {
    equipmentId: 4,
    name: 'pullup bar',
  },
  {
    equipmentId: 5,
    name: 'squat rack',
  },
  {
    equipmentId: 6,
    name: 'bench rack',
  },
  {
    equipmentId: 7,
    name: 'kettlebell',
  },
  {
    equipmentId: 8,
    name: 'medicine ball',
  },
];

const insertDummyData = () => {
  db.User.create(userData)
    .then(() => db.Workout.create(workoutData))
    .then(() => db.Exercise.create(exerciseData))
    .then(() => db.MuscleGroup.create(muscleGroupsData))
    .then(() => db.Equipment.create(equipmentData))
    .then(() => db.dbConnect.close());
};

insertDummyData();
