import React, { useState } from "react";
import { Search } from "carbon-components-react";
import "./filter.scss";

export function Filter({ updateQuery }) {
  const [query, setQuery] = useState("");

  function changeQuery(event) {
    const value = event.target.value;
    setQuery(value);
    updateQuery(value);
  }
  function clearFilters() {
    setQuery("");
    updateQuery("");
  }

  return (
    <div className="filter-wrapper">
      <Search
        placeHolderText="Name"
        value={query}
        onChange={changeQuery}
        labelText="Search"
        size="xl"
      />
      <div className="filter-wrapper__button">
        <button onClick={clearFilters}>Clear</button>
      </div>
    </div>
  );
}
