//users (list of users)
//username
//password
//favorites (link to workouts docs)

//workout (at least one)
//name
//list of exercises (link to docs)

//list of exercises
//id
//name
//instructions
//video
//estimated time required
//weight (initially 0)
//set (initially 0)
//reps (initially 0)
//muscle group (link to doc)
//eqiupment (link to doc)

//list of muscle groups
//id
//muslce group

//list of equipment
//id
//name

let dummyData = {
  users: {
    1: {
      username: 'testUsername1',
      password: 'testPassword1',
      favorites: [1]
    },
    2: {
      username: 'testUsername2',
      password: 'testPassword2',
      favorites: [2]
    }
  },
  workouts: {
    1: {
      name: 'testWorkout1',
      exercises: [1, 2, 3]
    }
    2: {
      name: 'testWorkout2',
      exercises: [2, 1, 3]
    }
  },
  exercises: {
    1: {
      name: 'squats',
      instructions: 'Stand up with your feet shoulder-width apart. Bend your knees, press your hips back and stop the movement once the hip joint is slightly lower than the knees. Press your heels into the floor to return to the initial position. Repeat until set is complete. PROPER FORM AND BREATHING PATTERN.',
      video: "youtube.com",
      muscleGroups: [1],
      equipment: [5]
    },
    2: {
      name: 'pushups',
      instructions: '1. Get down on all fours, placing your hands slightly wider than your shoulders. 2. Straighten your arms and legs. 3. Lower your body until your chest nearly touches the floor. 4. Pause, then push yourself back up. 5. Repeat.',
      video: "youtube.com",
      muscleGroups: [2, 5, 4],
      equipment: [2]
    },
    3: {
      name: 'pullups',
      instructions: 'Grab the pullup bar with your palms down (shoulder-width grip). Hang to the pullup-bar with straight arms and your legs off the floor. Pull yourself up by pulling your elbows down to the floor. Go all the way up until your chin passes the be bar. Lower yourself until your arms are straight.',
      video: "youtube.com",
      muscleGroups: [6, 7],
      equipment: [4]
    }
  },
  muscleGroups: {
    1: {
      name: "legs",
    },
    2: {
      name: "chest",
    },
    3: {
      name: "back",
    },
    4: {
      name: "tricep",
    },
    5: {
      name: "core",
    },
    6: {
      name: "bicep",
    },
    7: {
      name: "lats"
    },
    8: {
      name: "shoulders"
    }
  },
  equipment: {
    1: {
      name: "dumbbells"
    },
    2: {
      name: "none"
    },
    3: {
      name: "treadmill"
    },
    4: {
      name: "pullup bar"
    },
    5: {
      name: "squat rack"
    },
    6: {
      name: "bench rack"
    },
    7: {
      name: "kettlebell"
    },
    8: {
      name: "medicine ball"
    }
  }
};

module.exports = dummyData;