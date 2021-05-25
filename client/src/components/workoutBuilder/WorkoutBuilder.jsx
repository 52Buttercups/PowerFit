import React from 'react';
import Builder from './Builder';
import styles from './workoutBuilder.module.scss';

const WorkoutBuilder = () => (
  <div className={styles.builderContainer}>
    <div className={styles.builder}>
      <Builder />
    </div>
    <div className={styles.builderImage} />
  </div>
);

export default WorkoutBuilder;
