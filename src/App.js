import React, {useState} from "react";

// third party
import "./styles/app.scss";

// import components
import Player from "./components/Player";
import Song from "./components/Song";

//Import song data
import data from "./data"

const App = () => {
  //state
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])

  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
