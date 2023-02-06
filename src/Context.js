import React, { useEffect, useState } from "react";

const AppContext = React.createContext();

export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=titanic`;

const AppProvider = ({ children }) => {
  // States
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
      } else {
        setIsError({
          show: "true",
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log("Not able to fetch the results", error);
    }
  };
  useEffect(() => {
    getMovies(API_URL);
  }, []);
  return (
    <AppContext.Provider value={{ isLoading, movie, isError }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
