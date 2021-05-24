import React from 'react';
import styles from './workoutBuilder.module.scss';

const WorkoutBuilder = () => (
  <div className={styles.builderContainer}>
    <div className={styles.builder} />
    <div className={styles.builderImage} />
  </div>
);

export default WorkoutBuilder;
