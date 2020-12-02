import React from "react";

const LibrarySong = ({
  name,
  artist,
  cover,
  id,
  setCurrentSong,
  setSongs,
  songs,
  song,
  audioRef,
  isPlaying,
}) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectedSong[0]);
    // add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        //id represents the song we click on
        return {
          // if they match active -> true
          ...song,
          active: true,
        };
      } else {
        // if don't match active -> false
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    if (isPlaying) {
      // check song is playing
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then((audio) => {
            audioRef.current.play();
          })
          .catch((error) => console.log(error));
      }
    }
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt="" src={cover} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
