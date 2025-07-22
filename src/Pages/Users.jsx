import React, { useState } from "react";
import { UserPlus, Search, Lock, User } from "lucide-react";

export default function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Usama Khan",
      username: "usamak",
      email: "usama@example.com",
      phone: "03001234567",
      role: "Admin",
      address: "Karachi, Pakistan",
      createdBy: "System",
      createdDate: "2023-01-01",
      updatedBy: "Usama",
      updatedDate: "2024-05-05",
    },
  ]);

  const handleAddUser = () => {
    const name = prompt("Enter name:");
    const username = prompt("Enter username:");
    const email = prompt("Enter email:");
    const phone = prompt("Enter phone:");
    const role = prompt("Enter role:");
    const address = prompt("Enter address:");

    if (name && username && email) {
      const newUser = {
        id: users.length + 1,
        name,
        username,
        email,
        phone,
        role,
        address,
        createdBy: "Admin",
        createdDate: new Date().toISOString().slice(0, 10),
        updatedBy: "Admin",
        updatedDate: new Date().toISOString().slice(0, 10),
      };
      setUsers([...users, newUser]);
    }
  };

  const handleFieldChange = (e, id, field) => {
    const updated = users.map((user) =>
      user.id === id ? { ...user, [field]: e.target.value } : user
    );
    setUsers(updated);
  };

  const handleChangePassword = (username) => {
    const newPassword = prompt(`Enter new password for ${username}:`);
    if (newPassword) {
      alert(`Password updated for ${username}.`);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <User className="w-7 h-7 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Users</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            onClick={handleAddUser}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
          >
            <UserPlus className="w-5 h-5" />
            Add User
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-200 text-gray-700 text-sm">
            <tr>
              <th className="px-4 py-3 border">#</th>
              <th className="px-4 py-3 border">Actions</th>
              <th className="px-4 py-3 border">Name</th>
              <th className="px-4 py-3 border">Username</th>
              <th className="px-4 py-3 border">Email</th>
              <th className="px-4 py-3 border">Phone</th>
              <th className="px-4 py-3 border">Role</th>
              <th className="px-4 py-3 border">Address</th>
              <th className="px-4 py-3 border">Created By</th>
              <th className="px-4 py-3 border">Created Date</th>
              <th className="px-4 py-3 border">Updated By</th>
              <th className="px-4 py-3 border">Updated Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id} className="text-sm text-gray-800">
                <td className="px-4 py-3 border text-center">{idx + 1}</td>
                <td className="px-4 py-3 border text-center">
                  <button
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    onClick={() => handleChangePassword(user.username)}
                  >
                    <Lock className="w-4 h-4" />
                    Change
                  </button>
                </td>
                <td className="px-4 py-3 border">
                  <input
                    type="text"
                    value={user.name}
                    onChange={(e) => handleFieldChange(e, user.id, "name")}
                    className="w-full border rounded px-1"
                  />
                </td>
                <td className="px-4 py-3 border">
                  <input
                    type="text"
                    value={user.username}
                    onChange={(e) => handleFieldChange(e, user.id, "username")}
                    className="w-full border rounded px-1"
                  />
                </td>
                <td className="px-4 py-3 border">
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) => handleFieldChange(e, user.id, "email")}
                    className="w-full border rounded px-1"
                  />
                </td>
                <td className="px-4 py-3 border">
                  <input
                    type="text"
                    value={user.phone}
                    onChange={(e) => handleFieldChange(e, user.id, "phone")}
                    className="w-full border rounded px-1"
                  />
                </td>
                <td className="px-4 py-3 border">
                  <input
                    type="text"
                    value={user.role}
                    onChange={(e) => handleFieldChange(e, user.id, "role")}
                    className="w-full border rounded px-1"
                  />
                </td>
                <td className="px-4 py-3 border">
                  <input
                    type="text"
                    value={user.address}
                    onChange={(e) => handleFieldChange(e, user.id, "address")}
                    className="w-full border rounded px-1"
                  />
                </td>
                <td className="px-4 py-3 border">
                  <input
                    type="text"
                    value={user.createdBy}
                    onChange={(e) => handleFieldChange(e, user.id, "createdBy")}
                    className="w-full border rounded px-1"
                  />
                </td>
                <td className="px-4 py-3 border">{user.createdDate}</td>
                <td className="px-4 py-3 border">
                  <input
                    type="text"
                    value={user.updatedBy}
                    onChange={(e) => handleFieldChange(e, user.id, "updatedBy")}
                    className="w-full border rounded px-1"
                  />
                </td>
                <td className="px-4 py-3 border">
                  <input
                    type="date"
                    value={user.updatedDate}
                    onChange={(e) => handleFieldChange(e, user.id, "updatedDate")}
                    className="w-full border border-gray-300 px-2 py-1 rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
