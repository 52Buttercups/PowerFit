import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { UsersContext } from './UsersContext';

export const APIContext = createContext({});

const APIProvider = ({ children }) => {
  const { loggedInUser, setLoggedInUser } = useContext(UsersContext);
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
        setLoggedInUser(response.data.username);
        return true;
      }
    } catch (err) {
      console.error(err);
    }
  };
  const loginUser = async (data) => {
    try {
      const response = await axios.post('/login', data);
      if (response.data.username) {
        setLoggedInUser(response.data.username);
        return true;
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

  return (
    <APIContext.Provider
      value={{
        registerUser,
        loginUser,
        getAllExercies,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export default APIProvider;
