import React from 'react';
import { useParams } from 'react-router-dom';
import usersData from '../Store/usersData';

const UserProfile = () => {
  const { userId } = useParams();
  const user = usersData.find((user) => user.id === Number(userId));

  if (!user) {
    return <div className="text-center text-red-600">User not found</div>;
  }

  const avatarInitial = user.name
  .split(' ')
  .map((word) => word.charAt(0).toUpperCase())
  .join('');


  return (
    <div className="flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg">
        <div className="photo-wrapper flex items-center justify-center p-4">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-700">{avatarInitial}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-center text-2xl text-gray-900 font-bold">{user.name}</h3>
          <div className="text-center text-gray-500 text-sm font-semibold">
            <p>User ID : {user.id}</p>
          </div>
          <div className="text-center my-4">
            <div className="flex flex-wrap justify-center gap-2 mt-2">
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
          <table className="w-full text-sm my-4">
            <tbody>
            <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">No. of Notes</td>
                <td className="px-2 py-2 text-center">{user.purchasedNotes.length}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                <td className="px-2 py-2">{user.email}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                <td className="px-2 py-2">{user.mobile}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                <td className="px-2 py-2">{user.address}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center my-4">
            <a
              className="text-sm text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
              href={`/editUser/${user.id}`}
            >
              Edit Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
