import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { UsersContext } from './UsersContext';
import { WorkoutContext } from './WorkoutContext';

export const APIContext = createContext({});

const APIProvider = ({ children }) => {
  const { newWorkout, workoutToView } = useContext(WorkoutContext);

  /** ****************************************************************************
  *                      API calls for user auth
  ***************************************************************************** */

  const registerUser = async (data) => {
    try {
      const response = await axios.post('/register', data);
      if (response.data.username) {
        return response.data.username;
      }
    } catch (err) {
      console.error(err);
    }
  };
  const loginUser = async (data) => {
    try {
      const response = await axios.post('/login', data);
      if (response.data.username) {
        return response.data.username;
      }
    } catch (err) {
      console.error(err);
    }
  };

  /** ****************************************************************************
  *                      API calls for exercises
  ***************************************************************************** */

  const getAllExercies = async () => {
    try {
      const res = await axios.get('/exercises');
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  /** ****************************************************************************
  *                      API calls for usersWorkouts
  ***************************************************************************** */

  // /userworkouts/:name
  const getAUsersWorkouts = async () => {
    try {
      const res = await axios.get(`/userWorkouts/${localStorage.getItem('user')}`);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  const addUserWorkout = async (id) => {
    const userWorkout = {
      username: localStorage.getItem('user'),
      workouts: workoutToView,
    };
    try {
      const res = await axios.post('/userWorkouts', userWorkout);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  const saveToFavorites = async (id) => {
    const data = {
      username: localStorage.getItem('user'),
      workoutId: id,
      isFavorite: true,
    };

    try {
      const res = await axios.put('/userWorkouts', data);

      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  /** ****************************************************************************
  *                      API calls for workouts
  ***************************************************************************** */

  const addWorkout = async () => {
    try {
      const res = await axios.post('/workouts', newWorkout);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  const getRandomWorkout = async () => {
    try {
      const workouts = await axios.get('/workouts');
      return workouts.data[Math.floor(Math.random() * workouts.data.length)];
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <APIContext.Provider
      value={{
        registerUser,
        loginUser,
        getAllExercies,
        getAUsersWorkouts,
        addWorkout,
        getRandomWorkout,
        saveToFavorites,
        addUserWorkout,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export default APIProvider;
