import React from 'react';

// material ui
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'self-start',
    padding: '15px',
  },
  type: {
    textAlign: 'start',
  },
  cap: {
    textTransform: 'capitalize',
  },
}));

const WorkoutInfo = ({ exercise }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography color="secondary" variant="h5" className={classes.cap}>
        {exercise.name}
      </Typography>
      <Typography color="primary" variant="body1" className={classes.type}>
        {exercise.instructions}
      </Typography>
    </div>
  );
};

export default WorkoutInfo;
