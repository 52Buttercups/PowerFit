import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { WorkoutContext } from '../../context/WorkoutContext';

// image
import stockImg from '../../assets/boxed-water.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function BuilderCard() {
  const classes = useStyles();
  const history = useHistory();
  const { setNewWorkout } = useContext(WorkoutContext);
  const goToBuilder = () => {
    setNewWorkout({
      name: '',
      exercises: [],
    });
    history.push('/builder');
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={goToBuilder}>
        <CardMedia
          component="img"
          className={classes.media}
          image={stockImg}
          title="Workout Boss"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Workout Builder
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BuilderCard;
