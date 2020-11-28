import React from "react";

const LibrarySong = ({ song }) => {
  return (
    <div className="library-song">
      <img alt={song.name} src={song.cover} />
      <h3>{song.artist}</h3>
      <h4>{song.name}</h4>
    </div>
  );
};

export default LibrarySong;
