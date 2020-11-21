import React, { useState } from "react";

// third party
import "./styles/app.scss";

// import components
import Player from "./components/Player";
import Song from "./components/Song";

//Import song data
import data from "./data";

const App = () => {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
    </div>
  );
};

export default App;
