import React from 'react';

const AddUserButton = ({ handleAddUser }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
      onClick={handleAddUser}
    >
      Add User
    </button>
  );
};

export default AddUserButton;
