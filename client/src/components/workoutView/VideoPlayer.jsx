import React, { useState, useEffect } from 'react';

import getYouTubeID from 'get-youtube-id';

const YoutubePlayer = ({ workout }) => {
  const { exercises } = workout;
  const [defaultVideoId, setDefaultVideoId] = useState('');
  const [playlist, setPlaylist] = useState('');

  // configuration obj
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  // function that returns the first videoId of exercises or a default video id
  const getDefaultVideoId = () => {
    let id = 'eM35NJRr8-I';
    // if there are no exersices return defautl
    if (!exercises) {
      return id;
    }
    // if exercises check for valid url and video id
    if (exercises.length > 0) {
      const firstVideo = exercises[0].video;
      // check there is a youtube url if not return default video id
      if (firstVideo === '' || firstVideo === null) {
        return id;
      }
      // getYouTubeID with fuzzy false returns only strict id matches
      // this will verify the video url has a valid id
      const firstVideoId = getYouTubeID(firstVideo, { fuzzy: false });

      // if there is a valid id reassign id
      if (firstVideoId !== null) {
        id = firstVideoId;
      }
    }
    return id;
  };

  // function that loops over exercise videos and parses video ids into a playlist url string
  const getPlaylistIds = () => {
    let baseUrl = `https://www.youtube.com/embed/${defaultVideoId}`;
    // if only one exercise then it is already added to the defaultid in the useEffect
    if (exercises.length <= 1) {
      return baseUrl;
    }

    // get a list of videos from exercises
    const videoURLs = exercises.map((exercise) => exercise.video);

    // loop over videos and if there is a missing video use the filler video id
    const videoIds = videoURLs.map((url) => {
      if (getYouTubeID(url) === null || url === null) {
        return 'eM35NJRr8-I';
      }
      return getYouTubeID(url);
    });

    const playlistString = videoIds.join(',');

    baseUrl = `https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&playlist=${playlistString}`;
    return baseUrl;
  };

  useEffect(() => {
    const defaultId = getDefaultVideoId();
    setDefaultVideoId(defaultId);

    const playlistIds = getPlaylistIds();
    setPlaylist(playlistIds);
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
