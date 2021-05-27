import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext({});

const WorkoutProvider = ({ children }) => {
  const [allExercises, setAllExercises] = useState([]);
  const [workoutToView, setWorkoutToView] = useState({});
  const [newWorkout, setNewWorkout] = useState({
    name: '',
    exercises: [],
  });

  return (
    <WorkoutContext.Provider
      value={{
        newWorkout,
        setNewWorkout,
        allExercises,
        setAllExercises,
        workoutToView,
        setWorkoutToView,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
