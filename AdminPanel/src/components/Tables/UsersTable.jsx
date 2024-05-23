import usersData from "../../Store/usersData";
import { Link } from 'react-router-dom';
import { Search, UserPlus, Edit, Trash2, Eye } from 'lucide-react';

  const UsersTable = () => {
    return (
      <div className="rounded-lg border-x border-gray-300 bg-white px-5 pt-6 pb-2.5 shadow-lg sm:px-7.5 xl:pb-1">
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
              {usersData.map((user) => (
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
                      <p key={note.id} className="text-gray-900">{note.title}</p>
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
                  <Link to={`/editUser/${user.id}`} className="text-green-600 hover:text-green-800">
                    <Edit className="w-5 h-5" />
                  </Link>
                  <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-500">
                    <Trash2 className="w-5 h-5" />
                  </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default UsersTable;
  