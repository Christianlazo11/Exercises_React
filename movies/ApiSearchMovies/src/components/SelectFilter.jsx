import React from "react";
// import { useState } from "react";

const SelectFilter = ({ handleFilter, handleSearch, handlePage }) => {
  //   const [value, setValue] = useState();
  return (
    <div className="container selectedFilter">
      <select
        className="form-select"
        aria-label="Default select example"
        style={{ width: "15rem", marginBottom: "2rem" }}
        onChange={(e) => {
          handleFilter(e.target.value);
          handleSearch("");
          handlePage(1);
        }}
      >
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
        <option value="now_playing">Now Playing</option>
      </select>
    </div>
  );
};

export default SelectFilter;
