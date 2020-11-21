import React, { useRef } from "react";

// Material UI
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  // Ref
  const audioRef = useRef(null);
  // Event Handler
  const playSongHandler = () => {
    audioRef.current.play();
    setIsPlaying(!isPlaying);
    if(isPlaying) {
      audioRef.current.pause();
    }else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  }

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
          <PlayArrowIcon onClick={playSongHandler} />
          <ArrowRightIcon />
        </div>
        <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default Player;