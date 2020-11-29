import React, { useState } from "react";

// third party
import "./styles/app.scss";

// import components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

//Import song data
import data from "./data";

const App = () => {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
};

export default App;
