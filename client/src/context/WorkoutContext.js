import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext({});

const WorkoutProvider = ({ children }) => {
  const [newWorkout, setNewWorkout] = useState({
    name: '',
    exercises: [],
  });

  return (
    <WorkoutContext.Provider
      value={{
        newWorkout,
        setNewWorkout,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
