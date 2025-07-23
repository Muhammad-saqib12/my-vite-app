import React, { useState } from "react";
import Layout from "../Components/Layout";
import Table from "../Components/Table";

// 👇 Table Columns
const columns = [
  "Name",
  "Username",
  "Email",
  "Password",
  "Role",
  "Status",
  "Created",
  "AT",
];

// 👇 Initial Data
const initialRows = [
  {
    name: "Arroon Smith",
    username: "arroon123",
    email: "arroon@example.com",
    password: "pass1234",
    role: "Admin",
    status: "Active",
    created: "System",
    at: "2024-01-15",
  },
  {
    name: "Kenneth James",
    username: "kennethj",
    email: "kenneth@example.com",
    password: "secure123",
    role: "Editor",
    status: "Active",
    created: "Admin",
    at: "2024-02-01",
  },
  {
    name: "Sarah Lopez",
    username: "slopez",
    email: "sarah@example.com",
    password: "sarah2024",
    role: "User",
    status: "Inactive",
    created: "Admin",
    at: "2024-03-10",
  },
  {
    name: "David Miller",
    username: "davidm",
    email: "david@example.com",
    password: "david321",
    role: "Editor",
    status: "Active",
    created: "System",
    at: "2024-04-05",
  },
  {
    name: "Emily Carter",
    username: "emilyc",
    email: "emily@example.com",
    password: "emcpass",
    role: "Admin",
    status: "Pending",
    created: "Admin",
    at: "2024-05-20",
  },
  {
    name: "Michael Scott",
    username: "mscott",
    email: "michael@example.com",
    password: "dundermifflin",
    role: "Manager",
    status: "Active",
    created: "HR",
    at: "2024-06-12",
  },
];


export default function Users() {
  const [rows, setRows] = useState(initialRows);
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role: "",
    status: "",
    created: "",
    at: "",
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRows([...rows, newUser]);
    setNewUser({
      name: "",
      username: "",
      email: "",
      password: "",
      role: "",
      status: "",
      created: "",
      at: "",
    });
    setShowModal(false);
  };

  return (
    <Layout>
      <div className="relative">
        <Table
          title="Users List"
          columns={columns}
          rows={rows}
          button="Add new User"
          onButtonClick={() => setShowModal(true)} // 👈 button click handler
        />

        {/* 🔽 Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-amber-100 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Add New User</h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                {["name", "username", "email", "password", "role", "status", "created", "at"].map((field) => (
                  <input
                    key={field}
                    name={field}
                    type="text"
                    placeholder={field[0].toUpperCase() + field.slice(1)}
                    value={newUser[field]}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-3 py-2"
                  />
                ))}
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="bg-gray-300 text-black px-4 py-2 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
