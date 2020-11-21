import React from "react";

// third party
import "./styles/app.scss";

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
