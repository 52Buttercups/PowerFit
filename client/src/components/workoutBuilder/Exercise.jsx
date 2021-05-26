import React, { useContext } from 'react';
import styles from './exercise.module.scss';
import { WorkoutContext } from '../../context/WorkoutContext';

export const Exercise = ({ exercise }) => {
  const { newWorkout, setNewWorkout } = useContext(WorkoutContext);
  return (
    <div className={styles.exerciseContainer}>
      <div className={styles.nameContainer}>
        <p>{exercise.name}</p>
        <i
          className="far fa-plus-square"
          onClick={() => {
            setNewWorkout({
              ...newWorkout,
              exercises: [...newWorkout.exercises, exercise],
            });
          }}
        />
      </div>
      <div className={styles.tagContainer}>
        {exercise.muscleGroups.length > 0
          && exercise.muscleGroups.map((tag, i) => {
            if (tag.name !== 'none') {
              return (<p key={i}>{tag.name}</p>);
            }
          })}
        {exercise.equipment.length > 0
          && exercise.equipment.map((tag, i) => {
            if (tag.name !== 'none') {
              return (<p key={i}>{tag.name}</p>);
            }
          })}
      </div>
    </div>
  );
};

export default Exercise;
