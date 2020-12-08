import React from "react";

// Material UI
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import PauseIcon from "@material-ui/icons/Pause";

const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setCurrentSong,
  currentSong,
}) => {
  // Events
  const playSongHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  //skip forward and backwards
  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id); //index of current song
    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          onChange={dragHandler}
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <ArrowLeftIcon onClick={() => skipTrackHandler("skip-back")} />
        {isPlaying ? (
          <PauseIcon onClick={playSongHandler} />
        ) : (
          <PlayArrowIcon onClick={playSongHandler} />
        )}
        <ArrowRightIcon onClick={() => skipTrackHandler("skip-forward")} />
      </div>
    </div>
  );
};

export default Player;
