import React from "react";
import Movie from "./Movie";
import Search from "./Search";

const Home = () => {
  return (
    <div>
      <h1>My Home page</h1>
      <Search />
      <Movie />
    </div>
  );
};

export default Home;
