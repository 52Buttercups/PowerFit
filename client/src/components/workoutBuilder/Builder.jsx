import React from 'react';
import styles from './builder.module.scss';

const Builder = () => (
  <div className={styles.builderContainer}>
    <h2>Workout Builder</h2>
    <div className={styles.exerciseWorkoutContainer}>
      <div className={styles.exercises}>
        <h3>Choose Exercises</h3>
        <p>Exercise</p>
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
