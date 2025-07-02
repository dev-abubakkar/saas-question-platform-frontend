"use client"

import type React from "react"
import { useState } from "react"

interface User {
  id: string
  name: string
  email: string
  role: "admin" | "teacher" | "student"
  status: "active" | "inactive"
  lastLogin: string
}

const AdminPanelApp: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "teacher",
      status: "active",
      lastLogin: "2024-01-15",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "student",
      status: "active",
      lastLogin: "2024-01-14",
    },
    {
      id: "3",
      name: "Bob Wilson",
      email: "bob@example.com",
      role: "admin",
      status: "inactive",
      lastLogin: "2024-01-10",
    },
  ])

  const [newUser, setNewUser] = useState<Partial<User>>({
    name: "",
    email: "",
    role: "student",
    status: "active",
  })

  const [stats] = useState({
    totalUsers: 156,
    activeUsers: 142,
    totalQuestions: 1250,
    totalPapers: 89,
  })

  const addUser = () => {
    if (newUser.name && newUser.email) {
      const user: User = {
        ...newUser,
        id: Date.now().toString(),
        lastLogin: new Date().toISOString().split("T")[0],
      } as User

      setUsers([...users, user])
      setNewUser({
        name: "",
        email: "",
        role: "student",
        status: "active",
      })
    }
  }

  const toggleUserStatus = (userId: string) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, status: user.status === "active" ? "inactive" : "active" } : user,
      ),
    )
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Admin Panel</h2>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-blue-600">Total Users</h3>
          <p className="text-2xl font-bold text-blue-900">{stats.totalUsers}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-green-600">Active Users</h3>
          <p className="text-2xl font-bold text-green-900">{stats.activeUsers}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-purple-600">Total Questions</h3>
          <p className="text-2xl font-bold text-purple-900">{stats.totalQuestions}</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-orange-600">Total Papers</h3>
          <p className="text-2xl font-bold text-orange-900">{stats.totalPapers}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Add User Form */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Add New User</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                className="w-full p-2 border rounded-md"
                placeholder="Enter user name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                className="w-full p-2 border rounded-md"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Role</label>
              <select
                value={newUser.role}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    role: e.target.value as User["role"],
                  })
                }
                className="w-full p-2 border rounded-md"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button
              onClick={addUser}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Add User
            </button>
          </div>
        </div>

        {/* User Management */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">User Management</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Name</th>
                  <th className="border border-gray-300 p-2 text-left">Email</th>
                  <th className="border border-gray-300 p-2 text-left">Role</th>
                  <th className="border border-gray-300 p-2 text-left">Status</th>
                  <th className="border border-gray-300 p-2 text-left">Last Login</th>
                  <th className="border border-gray-300 p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-2">{user.name}</td>
                    <td className="border border-gray-300 p-2">{user.email}</td>
                    <td className="border border-gray-300 p-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.role === "admin"
                            ? "bg-red-100 text-red-800"
                            : user.role === "teacher"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="border border-gray-300 p-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="border border-gray-300 p-2">{user.lastLogin}</td>
                    <td className="border border-gray-300 p-2">
                      <button
                        onClick={() => toggleUserStatus(user.id)}
                        className={`px-3 py-1 rounded text-xs font-medium ${
                          user.status === "active"
                            ? "bg-red-500 text-white hover:bg-red-600"
                            : "bg-green-500 text-white hover:bg-green-600"
                        }`}
                      >
                        {user.status === "active" ? "Deactivate" : "Activate"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPanelApp
