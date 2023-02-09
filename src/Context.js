import React, { useEffect, useState } from "react";

const AppContext = React.createContext();

export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppProvider = ({ children }) => {
  // States
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState("batman");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setIsLoading(false);
        setIsError({
          show: "false",
          msg: "",
        });
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
    let timeOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 500);
    return () => clearTimeout(timeOut);
  }, [query]);
  return (
    <AppContext.Provider value={{ isLoading, movie, isError, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
