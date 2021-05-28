import React, { useState, useEffect } from 'react';

import getYouTubeID from 'get-youtube-id';

const DEFAULTVIDEOID = 'eM35NJRr8-I';

const YoutubePlayer = ({ workout }) => {
  const { exercises } = workout;
  const [playlist, setPlaylist] = useState('');

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

    return `https://www.youtube.com/embed/?autoplay=1&playlist=${playlistString}`;
  };

  useEffect(() => {
    setPlaylist(getPlaylistIds());
  }, []);

  return (
    <div className="youtube-wrapper">
      <p>Your video playlist. If an exercise does not have a video, enjoy the music instead!</p>
      <iframe
        title="ytplayer"
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={playlist}
        frameBorder="0"
      />
    </div>
  );
};

export default YoutubePlayer;
