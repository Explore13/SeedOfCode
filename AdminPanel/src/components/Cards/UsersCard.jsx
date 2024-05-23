import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Edit, Trash2, CircleCheck } from "lucide-react";
import DeleteConfirmation from '../AlertComponents/DeleteConfirmation';
import usersData from "../../Store/usersData";


const UsersCard = ({searchTerm}) => {
  const { userId } = useParams();
  const [users, setUsers] = useState(usersData);
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    onConfirm: null,
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleDeleteClick = (userId,userName) => {
    setAlert({
      show: true,
      message: `Are you sure you want to delete ${userName.split(" ")[0]}?`,
      onConfirm: () => handleDeleteConfirm(userId, userName),
    });
  };

  const handleDeleteConfirm = (userId, userName) => {
    const firstName = userName.split(" ")[0];
    setUsers(users.filter((user) => user.id !== userId));
    setAlert({ show: false, message: '', onConfirm: null });
    setSuccessMessage(`${firstName} deleted successfully`);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const filteredUsers = users.filter(user => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
    return (
      user.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      user.email.toLowerCase().includes(lowerCaseSearchTerm) || 
      user.id.toString().includes(lowerCaseSearchTerm) || 
      user.purchasedNotes.some(note =>
        note.title.toLowerCase().includes(lowerCaseSearchTerm)
      )
    );
  });
  

  return (
    <div>
      {successMessage && (
        <div className="bg-green-200 flex gap-2 items-center text-green-800 fixed bottom-0 p-2 rounded mb-4">
        <CircleCheck size={15} className="" />
          {successMessage}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{user.name}</h3>
              <p className="text-gray-700 mb-3">{user.email}</p>
              <div className="flex flex-wrap -m-1">
                {user.purchasedNotes.map((note) => (
                  <span
                    key={note.id}
                    className="bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 m-1"
                  >
                    {note.title}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-b-lg">
              <Link to={`/profile/${user.id}`}>
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  View Details
                </button>{" "}
              </Link>
              <div className="flex space-x-2">
                <Link to={`/editUser/${user.id}`} className="text-green-600 hover:text-green-800">
                  <Edit className="w-5 h-5" />
                </Link>
                <button
                  onClick={() => handleDeleteClick(user.id, user.name)}
                  className="text-red-600 hover:text-red-800  "
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <DeleteConfirmation
        show={alert.show}
        message={alert.message}
        onConfirm={alert.onConfirm}
        onCancel={() => setAlert({ show: false, message: '', onConfirm: null })}
      />
    </div>
  );
};

export default UsersCard;
