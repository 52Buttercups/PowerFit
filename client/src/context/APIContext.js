import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { UsersContext } from './UsersContext';
import { WorkoutContext } from './WorkoutContext';

export const APIContext = createContext({});

const APIProvider = ({ children }) => {
  const { loggedInUser } = useContext(UsersContext);
  const { newWorkout } = useContext(WorkoutContext);
  const baseURL = 'http://localhost:5000';
  // http://localhost:5000/login POST
  // http://localhost:5000/register POST

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
    console.log('get a users workouts with user: ', loggedInUser);
    try {
      const res = await axios.get(`/userWorkouts/${loggedInUser}`);
      console.log('get a users workouts response ', res);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  const saveToFavorites = async (id) => {
    const data = {
      username: loggedInUser,
      workoutId: id,
      isFavorite: true,
    };
    console.log('saveToFavorites data', data);
    try {
      const res = await axios.put('/userWorkouts', data);
      console.log('saveToFavorites res', res.data);
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
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export default APIProvider;
