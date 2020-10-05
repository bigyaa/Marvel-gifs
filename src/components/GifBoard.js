import React, { useEffect, useState } from "react";
import axios from "axios";

const GIF_API = process.env.REACT_APP_GIF_API_KEY;

const GifBoard = ({ character }) => {
  const limit = 15;
  const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${GIF_API}&q=${character}&limit=${limit}&offset=0&rating=g&lang=en
  `;
  const randomSearchUrl = `https://api.giphy.com/v1/gifs/random?api_key=${GIF_API}&tag=${character}`;

  const [gifs, setGifs] = useState();

  const fetchGifs = async () => {
    const { data } = await axios.get(searchUrl);

    setGifs(data.data);
  };

  useEffect(() => {
    setGifs();
    character && fetchGifs();
  }, [character]);

  return character ? (
    <div className="gif-container">
      {/* <div className="header-container">
        <h2>GIF Board of {character || "sth"}</h2>
      </div> */}
      <div className="gif-board">
        {gifs ? (
          gifs.map(
            (gif) =>
              gif.images.downsized_large.url && (
                <img
                  alt={character}
                  src={gif.images.downsized_large.url}
                  key={gif.id}
                />
              )
          )
        ) : (
          <div className="loader">Fetching GIFs . . .</div>
        )}
      </div>
    </div>
  ) : (
    <div className="loader"></div>
  );
};

export default GifBoard;
