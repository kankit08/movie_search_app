import React, { useContext } from "react";
import { AppContext } from "../Context";

const Movie = () => {
  const { movie } = useContext(AppContext);
  return (
    <div>
      {movie.map((movieList) => {
        return (
          <div>
            <h2>{movieList.Title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
