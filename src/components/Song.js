import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover} />
      <h2>{currentSong.artist}</h2>
      <h2>{currentSong.name}</h2>
    </div>
  );
};

export default Song;
