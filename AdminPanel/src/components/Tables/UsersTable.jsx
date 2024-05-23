import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, Edit, Trash2, CircleCheck } from "lucide-react";
import usersData from "../../Store/usersData";
import DeleteConfirmation from "../AlertComponents/DeleteConfirmation";

const UsersTable = ({searchTerm}) => {
  const [users, setUsers] = useState(usersData);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    onConfirm: null,
  });
  const [successMessage, setSuccessMessage] = useState("");

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
  


  const handleDeleteClick = (userId, userName) => {
    setAlert({
      show: true,
      message: `Are you sure you want to delete ${userName}?`,
      onConfirm: () => handleDeleteConfirm(userId, userName),
    });
  };

  const handleDeleteConfirm = (userId, userName) => {
    setUsers(users.filter((user) => user.id !== userId));
    setAlert({ show: false, message: "", onConfirm: null });
    setSuccessMessage(`${userName} deleted successfully`);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="rounded-lg border-x border-gray-300 bg-white px-5 pt-6 pb-2.5 shadow-lg sm:px-7.5 xl:pb-1">
      {successMessage && (
        <div className="bg-red-200 text-red-800 flex gap-2  items-center p-2 fixed bottom-0 left-1/2 rounded mb-4">
          <CircleCheck size={15} className="" />
          {successMessage}
        </div>
      )}
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="min-w-[220px] py-4 px-4 font-medium text-gray-800 xl:pl-11">
                User Id
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-gray-800">
                User Name
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-gray-800">
                Email
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-gray-800">
                Notes
              </th>
              <th className="py-4 px-4 font-medium text-gray-800">Actions</th>
            </tr>
          </thead>
          <tbody>
          {filteredUsers.map((user) => (
              <tr key={user.id} className="even:bg-gray-100 hover:bg-gray-50">
                <td className="border-b border-gray-300 py-5 px-4 pl-9 xl:pl-11">
                  <h5 className="font-medium text-gray-900">{user.id}</h5>
                </td>
                <td className="border-b border-gray-300 py-5 px-4">
                  <p className="text-gray-900">{user.name}</p>
                </td>
                <td className="border-b border-gray-300 py-5 px-4">
                  <p className="text-gray-900">{user.email}</p>
                </td>
                <td className="border-b border-gray-300 py-5 px-4">
                  {user.purchasedNotes.map((note) => (
                    <p key={note.id} className="text-gray-900">
                      {note.title}
                    </p>
                  ))}
                </td>
                <td className="border-b border-gray-300 py-5 px-4">
                  <div className="flex items-center space-x-3.5">
                    <Link
                      to={`/profile/${user.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Eye className="w-5 h-5" />
                    </Link>
                    <Link
                      to={`/editUser/${user.id}`}
                      className="text-green-600 hover:text-green-800"
                    >
                      <Edit className="w-5 h-5" />
                    </Link>
                    <button
                      onClick={() => handleDeleteClick(user.id, user.name)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DeleteConfirmation
        show={alert.show}
        message={alert.message}
        onConfirm={alert.onConfirm}
        onCancel={() => setAlert({ show: false, message: "", onConfirm: null })}
      />
    </div>
  );
};

export default UsersTable;
