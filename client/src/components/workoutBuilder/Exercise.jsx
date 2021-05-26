import React from 'react';
import styles from './exercise.module.scss';

const sampleExercise = {
  name: 'pullups',
  instructions: 'Grab the pullup bar with your palms down (shoulder-width grip). Hang to the pullup-bar with straight arms and your legs off the floor. Pull yourself up by pulling your elbows down to the floor. Go all the way up until your chin passes the be bar. Lower yourself until your arms are straight.',
  video: 'youtube.com',
  muscleGroups: [
    { name: 'bicep' },
    { name: 'lats' }],
  equipment: [{ name: 'pullup bar' }],
};

export const Exercise = ({ exercise }) => {
  console.log(exercise);
  return (
    <div className={styles.exerciseContainer}>
      <p>{exercise.name}</p>
      <div className={styles.tagContainer}>
        {exercise.muscleGroups.length > 0
          && exercise.muscleGroups.map((tag, i) => {
            <p key={i}>{tag.name}</p>;
          })}
        {exercise.equipment.length > 0
          && exercise.equipment.map((tag, i) => {
            <p key={i}>{tag.name}</p>;
          })}
      </div>
    </div>
  );
};

export default Exercise;
