import { FaSearch } from 'react-icons/fa';
import './SearchInput.css';

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
      <FaSearch className="search-icon" color='grey' />
    </div>
  );
};

export default SearchInput;
