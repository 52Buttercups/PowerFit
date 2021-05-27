import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
// material ui
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// components
import BuilderCard from './BuilderCard';
import { WorkoutContext } from '../../context/WorkoutContext';
import { APIContext } from '../../context/APIContext';

const userWorkouts = {
  id: 1,
  username: 'john',
  favorites: [
    {
      id: 1,
      name: 'Arm Day',
      exercises: [
        {
          id: 1,
          name: 'Perfect pushups',
          instructions: 'Get down on the floor and push the earth away from yourself like Chuck Norris',
          video: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
          muscleGroups: [
            {
              id: 1,
              name: 'bicep',
            },
            {
              id: 2,
              name: 'core',
            },
          ],
          equipment: null,
        },
      ],
    },
  ],
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  typography: {
    padding: '4px 9px',
  },
  workout: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '10px',
  },
  card: {
    marginTop: '20%',
  },
  buiderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

const Dashboard = () => {
  const history = useHistory();
  const [workouts, setWorkouts] = useState(userWorkouts.favorites);
  const { setWorkoutToView } = useContext(WorkoutContext);
  const { getAUsersWorkouts } = useContext(APIContext);
  const styles = useStyles();

  const viewWorkout = (workout) => {
    setWorkoutToView(workout);
    history.push('/viewer');
  };

  useEffect(async () => {
    try {
      const data = await getAUsersWorkouts();
      if (data) {
        setWorkouts([...workouts, ...data.favorites]);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className={styles.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography color="primary" variant="h3">
            Dashboard
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography color="primary" variant="h4">
            My workouts
          </Typography>

          {workouts.length > 0 && workouts.map((workout) => (
            <div key={workout.id} className={styles.workout}>
              <Typography color="primary" className={styles.typography}>
                {workout.name}
              </Typography>
              {/* <Link
                to={{
                  // eslint-disable-next-line no-underscore-dangle
                  pathname: `/viewer/${workout._id}`,
                  // hash: `${workout.name}`,
                  // state: { workout },
                }}
              > */}
              <Button onClick={() => viewWorkout(workout)} color="secondary">View</Button>
              {/* </Link> */}
            </div>
          ))}

        </Grid>

        <Grid item xs={12} sm={6} className={styles.buiderContainer}>
          <Typography color="primary" variant="h4">
            Workout Builder
          </Typography>
          <div className={styles.card}>
            <BuilderCard />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
