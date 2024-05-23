import React from "react";
import usersData from "../../Store/usersData";
import { Link } from "react-router-dom";
import { Search, UserPlus, Edit, Trash2, Eye } from "lucide-react";

const UsersCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {usersData.map((user) => (
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
              <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-500">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersCard;
