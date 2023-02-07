import React, { useContext } from "react";
import { AppContext } from "../Context";

const Search = () => {
  const { query, setQuery, isError } = useContext(AppContext);
  return (
    <section className="search-section">
      <h2>Search Your Movie here...</h2>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
      <div className="card-error">
        <p>{isError.show && isError.msg}</p>
      </div>
    </section>
  );
};

export default Search;
