import "./SearchInput.css";
import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({ query, handleInputChange }) => {
  return (
    <div className="search-container">
      <input
        id="search-id"
        type="text"
        placeholder="Search brand or names"
        className="search-input"
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

SearchInput.propTypes = {
  query: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default SearchInput;
