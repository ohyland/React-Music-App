import React, { useRef, useState } from "react";

// Material UI
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { duration } from "@material-ui/core";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  // Ref
  const audioRef = useRef(null);
  // Event Handler
  const playSongHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };
  const updateTimeHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration; // 137.195102 sec
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  // State
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });
  return (
    <div className="player">
      <h2>Player</h2>
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input type="range" />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <ArrowLeftIcon />
        <PlayArrowIcon onClick={playSongHandler} />
        <ArrowRightIcon />
      </div>
      <audio
        onTimeUpdate={updateTimeHandler}
        onLoadedMetadata={updateTimeHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
