import React from "react";

// import components
import Player from "./components/Player";
import Song from "./components/Song";

const App = () => {
  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song />
      <Player />
    </div>
  );
}

export default App;
