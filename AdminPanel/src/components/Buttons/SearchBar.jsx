import React from 'react';

const SearchButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-primary text-white rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark"
    >
      {text}
    </button>
  );
};

export default SearchButton;
