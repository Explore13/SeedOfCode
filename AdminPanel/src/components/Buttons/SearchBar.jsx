import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, isMobileView }) => {
  return (
    <div className={`mb-4`}>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={` ${isMobileView?'w-full':'w-md'} p-2 border rounded-lg transition-colors shadow duration-200 hover:border-blue-600 focus:border-blue-600 focus:outline-none`}
      />
    </div>
  );
};

export default SearchBar;
