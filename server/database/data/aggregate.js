const mongoose = require('mongoose');
const models = require('../index');

const findWorkoutsByUser = userId => {
  return models.User.aggregate([
    {
      $match: { userId }
    },
    {
      $unwind: {
        path: "$favoriteWorkouts"
      }
    },
    {
      $lookup: {
        from: "workouts",
        localField: "favoriteWorkouts",
        foreignField: "workoutId",
        as: "favoriteWorkouts"
      }
    },
    {
      $unwind: {
        path: "$favoriteWorkouts",
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $group: {
        _id: "$_id",
        favoriteWorkouts: { $push: "$favoriteWorkouts" },
        userId: { $first: "$userId" },
        username: { $first: "$username" },
        password: { $first: "$password" }
      }
    },
    {
      $unwind: "$favoriteWorkouts"
    },
    {
      $unwind: "$favoriteWorkouts.exercises"
    },
    {
      $lookup: {
        from: "exercises",
        localField: "exercises",
        foreignField: "exerciseId",
        as: "exercises"
      }
    },
    {
      $unwind: {
        path: "$exercises",
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $group: {
         _id: "$_id",
         exercises: { $push: "$exercises" },
         workoutId: { $first: "$workoutId" },
         name: { $first: "$name"
        }
      }
    }
  ]).then(data => console.log(data)).catch(err => console.error(err))
};
findWorkoutsByUser(1);
