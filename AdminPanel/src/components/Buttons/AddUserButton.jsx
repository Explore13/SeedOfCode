import React from "react";

const AddUserButton = ({isMobileView}) => {
  
  const handleAddUser = () =>{
    console.log("Add User")
  }

  return (
    <div className={`${isMobileView?'flex  justify-center mt-4':''}`}>


<button
        type="button"
        className="bg-blue-500 shadow hover:bg-blue-600 focus:outline-none rounded-lg text-white text-sm px-5 py-2.5 text-center mb-4"
        onClick={handleAddUser}
      >
        Add User
      </button>      
    </div>
  );
};

export default AddUserButton;
