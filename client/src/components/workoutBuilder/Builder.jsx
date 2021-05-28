import React, { useContext, useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import styles from './builder.module.scss';
import Exercise from './Exercise';
import { WorkoutContext } from '../../context/WorkoutContext';
import { APIContext } from '../../context/APIContext';

const Builder = () => {
  const history = useHistory();
  const {
    newWorkout, setNewWorkout, allExercises, setAllExercises, setWorkoutToView,
  } = useContext(WorkoutContext);
  const { getAllExercies, addWorkout } = useContext(APIContext);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(async () => {
    try {
      const res = await getAllExercies();
      if (res) {
        setAllExercises(res);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    setErrorMessage('');
  }, [newWorkout]);

  const changeHandler = (e) => {
    setNewWorkout({
      ...newWorkout,
      name: e.target.value,
    });
  };

  const removeExercise = (name) => {
    setNewWorkout({
      ...newWorkout,
      exercises: [
        ...newWorkout.exercises.filter((exercise) => exercise.name !== name),
      ],
    });
  };

  const createWorkout = async () => {
    if (newWorkout.name && newWorkout.exercises.length > 0) {
      try {
        const res = await addWorkout();
        setWorkoutToView(res);
        history.push('/viewer');
      } catch (err) {
        console.error(err);
      }
    } else {
      setErrorMessage('Workout must contain a name and at least one exercise');
    }
  };

  return (
    <div className={styles.builderContainer}>
      <h2>Workout Builder</h2>
      <div className={styles.exerciseWorkoutContainer}>
        <div className={styles.exercises}>
          <h3>Choose Exercises</h3>
          {allExercises.length > 0 && allExercises.map((exercise, idx) => (
            <Exercise exercise={exercise} key={idx} />
          ))}
        </div>
        <div className={styles.workout}>
          <h3>My Workout</h3>
          <input
            onChange={changeHandler}
            type="text"
            placeholder="Workout Name"
            name="name"
            value={newWorkout.name}
          />
          {newWorkout.exercises.length > 0
            && newWorkout.exercises.map((exercise, i) => (
              <div key={i} className={styles.workoutItem}>
                <p>
                  {exercise.name}
                  {' '}
                </p>
                <i className="far fa-minus-square" onClick={() => removeExercise(exercise.name)} />
              </div>
            ))}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <p className={styles.error}>{errorMessage}</p>
        <button className={styles.beginButton} onClick={createWorkout}>
          Begin Workout
        </button>
      </div>
    </div>
  );
};

export default Builder;
