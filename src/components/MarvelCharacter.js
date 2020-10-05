import React, { useEffect, useState } from "react";
import axios from "axios";

const MARVEL_PUBLIC_API = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;

const MarvelCharacter = (props) => {
  const characterLimit = 80;
  const allCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters?apikey=${MARVEL_PUBLIC_API}&limit=${characterLimit}&orderBy=-modified`;

  const { setCharacter } = props;

  const [characters, setCharacters] = useState();

  const fetchCharacters = async () => {
    const { data } = await axios.get(allCharacterUrl);

    setCharacters(data.data.results);
  };

  const handleSelect = (e) => setCharacter(e.target.value);

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="container">
      <div className="select-container">
        <select id="marvelCharacter" onChange={handleSelect}>
          <option>- Pick a marvel character -</option>
          {characters &&
            characters.map(
              (character) =>
                character &&
                character.name && (
                  <option key={character.name}>{character.name}</option>
                )
            )}
        </select>
      </div>
    </div>
  );
};

export default MarvelCharacter;
