import React from 'react';
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

import stockImg from '../../assets/core-workout.jpg';

// components
import WorkoutInfo from './WorkoutInfo';

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
  console.log(location);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography color="primary" variant="h4">
            Workout Viewer
          </Typography>
          <div>
            {location.state.workout.exercises.map((exercise, i) => (
              <WorkoutInfo key={i} exercise={exercise} />
            ))}
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image={stockImg}
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions className={classes.content}>
              <Button>Edit this workout</Button>
              <Button>Mark as complete</Button>
              <Button>Save to My Workouts</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default WorkoutViewer;
