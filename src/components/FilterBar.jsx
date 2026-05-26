import React from "react";

function FilterBar({setFilterData}) {
  return (
    <select className="filter-country" onChange={(e) => setFilterData(e.target.value.toLowerCase())}>
      <option hidden>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default FilterBar;
