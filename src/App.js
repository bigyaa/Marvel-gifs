import React, { useState } from "react";
import MarvelCharacter from "./components/MarvelCharacter";
import GifBoard from "./components/GifBoard";

const App = () => {
  const [character, setCharacter] = useState();

  return (
    <div>
      <h1>Marvel Character GIF Board</h1>
      <div className="main-container">
        <MarvelCharacter setCharacter={setCharacter} />
        <hr />
        <GifBoard character={character} />
      </div>
    </div>
  );
};

export default App;
