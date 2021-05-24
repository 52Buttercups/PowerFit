const userWorkouts = {
  id: 1,
  username: 'john',
  favorites: [{
    id: 1,
    name: 'Arm Day',
    exercises: [
      {
        id: 1,
        name: 'pushups',
        instructions: 'Get down on the floor and push the earth away from yourself like Chuck Norris',
        video: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
        muscleGroups: [
          {
            id: 1,
            name: 'bicep',
          },
          {
            id: 2,
            name: 'core',
          },
        ],
        equipment: [{
          id: 2,
          name: 'none',
        }],
      },
    ],
  }],
};

module.exports = userWorkouts;

/*
db.users.aggregate([
{

}
])
*/
