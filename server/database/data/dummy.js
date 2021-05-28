/*
+ users (list of users)
  - username
  - password
  - favorites (link to workouts docs)

+ workout (at least one)
  - name
  - list of exercises (link to docs)

+ list of exercises
  - id
  - name
  - instructions
  - video
  - estimated time required
  - weight (initially 0)
  - set (initially 0)
  - reps (initially 0)
  - muscle group (link to doc)
  - eqiupment (link to doc)

+ list of muscle groups
  - id
  - muslce group

+ list of equipment
  - id
  - name
*/

const {
  Users, Workouts, Exercises,
} = require('../index');
// const { db } = require('../index');

const userData = [
  {
    username: 'testUsername1',
    password: 'testPassword1',
    favoriteWorkouts: ['testWorkout1'],
  },
  {
    username: 'testUsername2',
    password: 'testPassword2',
  },
];

const workoutData = [
  {
    name: 'testWorkout1',
    exercises: [
      {
        name: 'air squats',
        instructions: 'Stand up with your feet shoulder-width apart. Bend your knees, press your hips back and stop the movement once the hip joint is slightly lower than the knees. Press your heels into the floor to return to the initial position. Repeat until set is complete. PROPER FORM AND BREATHING PATTERN.',
        video: 'https://www.youtube.com/watch?v=rMvwVtlqjTE&ab_channel=CrossFit%C2%AECrossFit%C2%AE',
        muscleGroups: [{
          name: 'legs',
        }],
        equipment: [{
          name: 'none',
        }],
      },
      {
        name: 'pushups',
        instructions: '1. Get down on all fours, placing your hands slightly wider than your shoulders. 2. Straighten your arms and legs. 3. Lower your body until your chest nearly touches the floor. 4. Pause, then push yourself back up. 5. Repeat.',
        video: 'https://www.youtube.com/watch?v=IODxDxX7oi4&ab_channel=CalisthenicmovementCalisthenicmovementVerified',
        muscleGroups: [{
          name: 'chest',
        }, {
          name: 'core',
        }, {
          name: 'tricep',
        }],
        equipment: [{
          name: 'none',
        }],
      },
      {
        name: 'pullups',
        instructions: 'Grab the pullup bar with your palms down (shoulder-width grip). Hang to the pullup-bar with straight arms and your legs off the floor. Pull yourself up by pulling your elbows down to the floor. Go all the way up until your chin passes the be bar. Lower yourself until your arms are straight.',
        video: 'https://www.youtube.com/watch?v=eGo4IYlbE5g&ab_channel=CalisthenicmovementCalisthenicmovementVerified',
        muscleGroups: [{
          name: 'biceps',
        }, {
          name: 'lats',
        }],
        equipment: [{
          name: 'pullup bar',
        }],
      },
    ],
  },
  {
    name: 'testWorkout2',
    exercises: [
      {
        name: 'pushups',
        instructions: '1. Get down on all fours, placing your hands slightly wider than your shoulders. 2. Straighten your arms and legs. 3. Lower your body until your chest nearly touches the floor. 4. Pause, then push yourself back up. 5. Repeat.',
        video: 'https://www.youtube.com/watch?v=IODxDxX7oi4&ab_channel=CalisthenicmovementCalisthenicmovementVerified',
        muscleGroups: [{
          name: 'chest',
        }, {
          name: 'core',
        }, {
          name: 'tricep',
        }],
        equipment: [{
          name: 'none',
        }],
      },
      {
        name: 'air squats',
        instructions: 'Stand up with your feet shoulder-width apart. Bend your knees, press your hips back and stop the movement once the hip joint is slightly lower than the knees. Press your heels into the floor to return to the initial position. Repeat until set is complete. PROPER FORM AND BREATHING PATTERN.',
        video: 'https://www.youtube.com/watch?v=rMvwVtlqjTE&ab_channel=CrossFit%C2%AECrossFit%C2%AE',
        muscleGroups: [{
          name: 'legs',
        }],
        equipment: [{
          name: 'none',
        }],
      },
      {
        name: 'pullups',
        instructions: 'Grab the pullup bar with your palms down (shoulder-width grip). Hang to the pullup-bar with straight arms and your legs off the floor. Pull yourself up by pulling your elbows down to the floor. Go all the way up until your chin passes the be bar. Lower yourself until your arms are straight.',
        video: 'https://www.youtube.com/watch?v=eGo4IYlbE5g&ab_channel=CalisthenicmovementCalisthenicmovementVerified',
        muscleGroups: [
          { name: 'bicep' },
          { name: 'lats' }],
        equipment: [{ name: 'pullup bar' }],
      },
    ],
  },
];

const exerciseData = [
  {
    name: 'air squats',
    instructions: 'Stand up with your feet shoulder-width apart. Bend your knees, press your hips back and stop the movement once the hip joint is slightly lower than the knees. Press your heels into the floor to return to the initial position. Repeat until set is complete. PROPER FORM AND BREATHING PATTERN.',
    video: 'https://www.youtube.com/watch?v=rMvwVtlqjTE&ab_channel=CrossFit%C2%AECrossFit%C2%AE',
    muscleGroups: [{
      name: 'legs',
    }],
    equipment: [{ name: 'none' }],
  },
  {
    name: 'pushups',
    instructions: '1. Get down on all fours, placing your hands slightly wider than your shoulders. 2. Straighten your arms and legs. 3. Lower your body until your chest nearly touches the floor. 4. Pause, then push yourself back up. 5. Repeat.',
    video: 'https://www.youtube.com/watch?v=IODxDxX7oi4&ab_channel=CalisthenicmovementCalisthenicmovementVerified',
    muscleGroups: [
      { name: 'chest' },
      { name: 'core' },
      { name: 'tricep' },
    ],
    equipment: [{ name: 'none' }],
  },
  {
    name: 'pullups',
    instructions: 'Grab the pullup bar with your palms down (shoulder-width grip). Hang to the pullup-bar with straight arms and your legs off the floor. Pull yourself up by pulling your elbows down to the floor. Go all the way up until your chin passes the be bar. Lower yourself until your arms are straight.',
    video: 'https://www.youtube.com/watch?v=eGo4IYlbE5g&ab_channel=CalisthenicmovementCalisthenicmovementVerified',
    muscleGroups: [
      { name: 'bicep' },
      { name: 'lats' },
    ],
    equipment: [{ name: 'pullup bar' }],
  },
  {
    name: 'forward lunges',
    instructions: 'Step forward into lunge, then step back to feet together. Can do alternating or one side at a time. Make sure knees don’t go past toes Keep legs in train tracks',
    video: 'https://www.youtube.com/watch?v=nlots37xVL8&ab_channel=DoctorOzDoctorOzVerified',
    muscleGroups: [
      { name: 'legs' },
    ],
    equipment: [{ name: 'none' }],
  },
  {
    name: 'backward lunges',
    instructions: 'Instead of stepping forward, take one leg back, then step back with feet together. Can do alternating or one side at a time. Make sure knees don’t go past toes. Keep legs in train tracks',
    video: 'https://www.youtube.com/watch?v=Ubu3uwdPns8&ab_channel=Runner%27sWorldRunner%27sWorldVerified',
    muscleGroups: [
      { name: 'legs' },
    ],
    equipment: [{ name: 'none' }],
  },
  {
    name: 'hip thrusts',
    instructions: 'Lay down on the floor on your back, with knees bent, feet flat on the floor. Lift hips up and down. Drive weight into heels. Also works hamstrings and lower back. For an extra challenge, lift one leg in the air at a time and do the same movement. Don’t alternate, do several repetitions on one side then the other',
    video: 'https://www.youtube.com/watch?v=Ec25SL8wKEA&ab_channel=BodysportcomBodysportcom',
    muscleGroups: [
      { name: 'legs' },
    ],
    equipment: [{ name: 'none' }],
  },
  {
    name: 'leg lifts',
    instructions: 'Tabletop position, lift one leg in the air behind you up and down (can do different variations with bent knee/straight leg etc)',
    video: 'https://www.youtube.com/watch?v=oV99_zvhl_A&ab_channel=ReflexClinicReflexClinic',
    muscleGroups: [
      { name: 'legs' },
    ],
    equipment: [{ name: 'none' }],
  },
  {
    name: 'squats',
    instructions: 'Stand up with your feet shoulder-width apart. Bend your knees, press your hips back and stop the movement once the hip joint is slightly lower than the knees. Press your heels into the floor to return to the initial position. Repeat until set is complete. PROPER FORM AND BREATHING PATTERN.',
    video: 'https://www.youtube.com/watch?v=aclHkVaku9U&ab_channel=BowflexBowflex',
    muscleGroups: [
      { name: 'legs' },
    ],
    equipment: [{ name: 'squat rack' }],
  },
];

// const muscleGroupsData = [
//   {
//     muscleId: 1,
//     name: 'legs',
//   },
//   {
//     muscleId: 2,
//     name: 'chest',
//   },
//   {
//     muscleId: 3,
//     name: 'back',
//   },
//   {
//     muscleId: 4,
//     name: 'tricep',
//   },
//   {
//     muscleId: 5,
//     name: 'core',
//   },
//   {
//     muscleId: 6,
//     name: 'bicep',
//   },
//   {
//     muslceId: 7,
//     name: 'lats',
//   },
//   {
//     muscleId: 8,
//     name: 'shoulders',
//   },
// ];

// const equipmentData = [
//   {
//     equipmentId: 1,
//     name: 'dumbbells',
//   },
//   {
//     equipmentId: 2,
//     name: 'none',
//   },
//   {
//     equipmentId: 3,
//     name: 'treadmill',
//   },
//   {
//     equipmentId: 4,
//     name: 'pullup bar',
//   },
//   {
//     equipmentId: 5,
//     name: 'squat rack',
//   },
//   {
//     equipmentId: 6,
//     name: 'bench rack',
//   },
//   {
//     equipmentId: 7,
//     name: 'kettlebell',
//   },
//   {
//     equipmentId: 8,
//     name: 'medicine ball',
//   },
// ];

const insertDummyData = async () => {
  try {
    await Users.create(userData);
    await Workouts.create(workoutData);
    await Exercises.create(exerciseData);
  } catch (err) {
    console.error(err);
  }
};

insertDummyData();
