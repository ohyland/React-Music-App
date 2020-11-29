import React from "react";

const LibrarySong = ({ song, songs, setCurrentSong, id }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
  };
  return (
    <div onClick={songSelectHandler} className="library-song">
      <img alt={song.name} src={song.cover} />
      <div className="song-description">
        <h3>{song.artist}</h3>
        <h4>{song.name}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;