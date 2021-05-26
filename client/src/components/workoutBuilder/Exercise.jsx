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

export const Exercise = ({ exercise }) => (
  <div className={styles.exerciseContainer}>
    Exercise here
  </div>
);

export default Exercise;
