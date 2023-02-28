import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search List</label>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        role={"searchbox"}
        id="search"
        placeholder="Search items"
      />
    </form>
  );
};

export default SearchItem;
