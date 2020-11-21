import React from "react";

// Material UI
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const Player = () => {
  return (
    <div className="player">
      <h2>Player</h2>
      <div className="time-control">
        <p>Start time</p>
        <input type="range"/>
        <p>End time</p>
        </div>
        <div className="play-control" >
          <ArrowLeftIcon/>
          <PlayArrowIcon />
          <ArrowRightIcon/>
          </div>

    </div>
  );
}

export default Player;