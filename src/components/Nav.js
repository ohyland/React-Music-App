import React from "react";

import QueueMusicIcon from "@material-ui/icons/QueueMusic";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <QueueMusicIcon />
      </button>
    </nav>
  );
};

export default Nav;
