import React from 'react';
import styles from './builder.module.scss';

const samepleExercises = [
  {
    name: 'pushups',
    instructions: '1. Get down on all fours, placing your hands slightly wider than your shoulders. 2. Straighten your arms and legs. 3. Lower your body until your chest nearly touches the floor. 4. Pause, then push yourself back up. 5. Repeat.',
    video: 'youtube.com',
    muscleGroups: [{
      name: 'chest',
    }, {
      name: 'core',
    }, {
      name: 'tricep',
    }],
    equipment: [{
      name: 'none',
    }],
  },
  {
    name: 'air squats',
    instructions: 'Stand up with your feet shoulder-width apart. Bend your knees, press your hips back and stop the movement once the hip joint is slightly lower than the knees. Press your heels into the floor to return to the initial position. Repeat until set is complete. PROPER FORM AND BREATHING PATTERN.',
    video: 'youtube.com',
    muscleGroups: [{
      name: 'legs',
    }],
    equipment: [{
      name: 'none',
    }],
  },
  {
    name: 'pullups',
    instructions: 'Grab the pullup bar with your palms down (shoulder-width grip). Hang to the pullup-bar with straight arms and your legs off the floor. Pull yourself up by pulling your elbows down to the floor. Go all the way up until your chin passes the be bar. Lower yourself until your arms are straight.',
    video: 'youtube.com',
    muscleGroups: [
      { name: 'bicep' },
      { name: 'lats' }],
    equipment: [{ name: 'pullup bar' }],
  },
];

const Builder = () => (
  <div className={styles.builderContainer}>
    <h2>Workout Builder</h2>
    <div className={styles.exerciseWorkoutContainer}>
      <div className={styles.exercises}>
        <h3>Choose Exercises</h3>

      </div>
      <div className={styles.workout}>
        <h3>My Workout</h3>
        <p>Exercise</p>
      </div>
    </div>
    <button>Begin Workout</button>
  </div>
);

export default Builder;
