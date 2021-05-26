import React, { useContext } from 'react';
import styles from './builder.module.scss';
import Exercise from './Exercise';
import { WorkoutContext } from '../../context/WorkoutContext';

const sampleExercises = [
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

const Builder = () => {
  const { newWorkout, setNewWorkout } = useContext(WorkoutContext);
  const removeExercise = (name) => {
    setNewWorkout({
      ...newWorkout,
      exercises: [
        ...newWorkout.exercises.filter((exercise) => exercise.name !== name),
      ],
    });
  };
  return (
    <div className={styles.builderContainer}>
      <h2>Workout Builder</h2>
      <div className={styles.exerciseWorkoutContainer}>
        <div className={styles.exercises}>
          <h3>Choose Exercises</h3>
          {sampleExercises.map((exercise, idx) => (
            <Exercise exercise={exercise} key={idx} />
          ))}
        </div>
        <div className={styles.workout}>
          <h3>My Workout</h3>
          {newWorkout.exercises.length > 0
            && newWorkout.exercises.map((exercise, i) => (
              <p key={i}>
                {exercise.name}
                {' '}
                <i className="far fa-minus-square" onClick={() => removeExercise(exercise.name)} />
              </p>
            ))}
        </div>
      </div>
      <button>Begin Workout</button>
    </div>
  );
};

export default Builder;
