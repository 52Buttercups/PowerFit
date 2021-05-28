import React, { useState, useEffect } from 'react';

import getYouTubeID from 'get-youtube-id';
import { makeStyles } from '@material-ui/core/styles';

const DEFAULTVIDEOID = 'eM35NJRr8-I';

const useStyles = makeStyles((theme) => ({
  media: {
    width: '640px',
    height: '360px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
      height: '150px',
    },
  },
}));

const YoutubePlayer = ({ workout }) => {
  const { exercises } = workout;
  const [playlist, setPlaylist] = useState('');
  const classes = useStyles();

  // function that loops over exercise videos and parses video ids into a playlist url string
  const getPlaylistIds = () => {
    // if only one exercise then it is already added to the defaultid in the useEffect
    if (exercises.length <= 1) {
      return `https://www.youtube.com/embed/${DEFAULTVIDEOID}`;
    }

    // get a list of videoIds from exercises
    const videoIds = [];
    exercises.map((exercise) => {
      const id = getYouTubeID(exercise.video);
      videoIds.push(id === null ? DEFAULTVIDEOID : id);
    });

    const playlistString = videoIds.join(',');

    const baseUrl = `https://www.youtube.com/embed/?autoplay=1&playlist=${playlistString}`;
    return baseUrl;
  };

  useEffect(() => {
    const playlistIds = getPlaylistIds();
    setPlaylist(getPlaylistIds());
  }, []);

  return (
    <div className="youtube-wrapper">
      <p>Your video playlist. If an exercise does not have a video, enjoy the music instead!</p>
      <iframe
        title="ytplayer"
        id="ytplayer"
        type="text/html"
        className={classes.media}
        src={playlist}
        frameBorder="0"
      />
    </div>
  );
};

export default YoutubePlayer;
