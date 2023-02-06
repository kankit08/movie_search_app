import React, { useContext } from "react";
import { AppContext } from "../Context";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const Movie = () => {
  const { movie } = useContext(AppContext);
  return (
    <section className="movie-page">
      <div className="container grid grid-4-col">
        {movie.map((movieList) => {
          const { imdbID, Title, Poster } = movieList;
          return (
            <NavLink to={`movie/${imdbID}`} key={uuidv4()}>
              <div className="card">
                <div className="card-info">
                  <h2>{Title}</h2>
                  <img src={Poster} alt={imdbID} />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movie;
