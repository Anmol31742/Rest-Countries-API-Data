import React from 'react'

function SearchBar({setFilterData}) {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for a country..." onChange={(e) => setFilterData(e.target.value.toLowerCase())}/>
    </div>
  )
}

export default SearchBar
