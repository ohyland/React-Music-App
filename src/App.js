import React, { useState, useRef } from "react";

// third party
import "./styles/app.scss";

// import components
import Nav from "./components/Nav";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

//Import song data
import data from "./data";

const App = () => {
  // Ref
  const audioRef = useRef(null);
  // State

  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const updateTimeHandler = (e) => {
    //updates the state songInfo
    const current = e.target.currentTime;
    const duration = e.target.duration; // 137.195102 sec
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  return (
    <div className="App">
      <Nav setLibraryStatus={setLibraryStatus} libraryStatus={libraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
      />
      <audio
        onTimeUpdate={updateTimeHandler}
        onLoadedMetadata={updateTimeHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default App;
