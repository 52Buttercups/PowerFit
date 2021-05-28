import React, { useState, useContext } from 'react';
// material ui
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { useHistory } from 'react-router-dom';
import stockImg from '../../assets/core-workout.jpg';

// components
import WorkoutInfo from './WorkoutInfo';
import VideoPlayer from './VideoPlayer';
import { WorkoutContext } from '../../context/WorkoutContext';
import { APIContext } from '../../context/APIContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: '75vh',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  content: {
    height: '25vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const WorkoutViewer = ({ location }) => {
  const history = useHistory();
  const classes = useStyles();
  const { workoutToView, setNewWorkout } = useContext(WorkoutContext);
  const { addUserWorkout, saveToFavorites } = useContext(APIContext);

  const handleClick = () => {
    const { _id } = workoutToView;
    saveToFavorites(_id);
  };

  const saveUserWorkout = async () => {
    const { _id } = workoutToView;
    try {
      const res = await addUserWorkout(_id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography color="primary" variant="h4">
            {workoutToView.name}
          </Typography>
          <div>
            {workoutToView.exercises.length > 0
              && workoutToView.exercises.map((exercise, i) => (
                <WorkoutInfo key={i} exercise={exercise} />
              ))}
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <VideoPlayer workout={workoutToView} />
            </CardActionArea>
            <CardActions className={classes.content}>
              <Button onClick={() => {
                setNewWorkout(workoutToView);
                history.push('/builder');
              }}
              >
                Edit this workout
              </Button>
              {/* <Button>Mark as complete</Button> */}
              <Button
                onClick={saveUserWorkout}
              >
                Save To My Workouts
              </Button>
              <Button
                onClick={handleClick}
              >
                Mark as Favorites
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default WorkoutViewer;
