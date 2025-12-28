import React, { useState } from "react";
import {
  Plus,
  Search,
  LayoutGrid,
  List,
  User,
  X,
} from "lucide-react";

const TeamPage = () => {
  const [viewMode, setViewMode] = useState("table");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);

  const users = [
    { id: 1, name: "Aarav Sharma", email: "aarav.sharma@example.com", role: "Admin", status: "Active", projects: 4 },
    { id: 2, name: "Priya Verma", email: "priya.verma@example.com", role: "Manager", status: "Active", projects: 6 },
    { id: 3, name: "Rohan Das", email: "rohan.das@example.com", role: "Editor", status: "Inactive", projects: 2 },
    { id: 4, name: "Sneha Gupta", email: "sneha.gupta@example.com", role: "Viewer", status: "Active", projects: 1 },
    { id: 5, name: "Ankit Roy", email: "ankit.roy@example.com", role: "Support", status: "Blocked", projects: 0 },
  ];

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  /* ===== UI BADGES ===== */
  const StatusBadge = ({ status }) => {
    const map = {
      Active: "bg-green-100 text-green-700",
      Inactive: "bg-gray-100 text-gray-600",
      Blocked: "bg-red-100 text-red-700",
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${map[status]}`}>
        ● {status}
      </span>
    );
  };

  const Avatar = ({ name }) => (
    <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
      {name.charAt(0)}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 py-8">

        {/* ===== HEADER ===== */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Team Members</h1>
            <p className="text-slate-500 mt-1">
              Manage your organization users and permissions
            </p>
          </div>

          <button
            onClick={() => setIsAddUserOpen(true)}
            className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5" />
            Add Member
          </button>
        </div>

        {/* ===== TOOLBAR ===== */}
        <div className="bg-white rounded-2xl border-none shadow-sm mb-6">
          <div className="p-5 flex flex-col md:flex-row justify-between gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                className="w-full pl-10 pr-4 py-2.5 border rounded-xl text-sm focus:ring-2 focus:ring-blue-500"
                placeholder="Search team member..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setViewMode("table")}
                className={`px-4 py-2 rounded-lg transition ${
                  viewMode === "table" ? "bg-white shadow" : ""
                }`}
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("card")}
                className={`px-4 py-2 rounded-lg transition ${
                  viewMode === "card" ? "bg-white shadow" : ""
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ===== TABLE VIEW ===== */}
        
        {viewMode === "table" && (
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50/80 backdrop-blur sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-slate-600">Member</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-600">Role</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-600">Status</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-600">Projects</th>
                    <th className="px-6 py-4 text-right font-semibold text-slate-600">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredUsers.map((u) => (
                    <tr
                      key={u.id}
                      className="group hover:bg-slate-50 transition"
                    >
                      {/* MEMBER */}
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow">
                          {u.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{u.name}</p>
                          <p className="text-xs text-slate-500">{u.email}</p>
                        </div>
                      </td>

                      {/* ROLE */}
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                          {u.role}
                        </span>
                      </td>

                      {/* STATUS */}
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium
                            ${
                              u.status === "Active"
                                ? "bg-green-100 text-green-700"
                                : u.status === "Blocked"
                                ? "bg-red-100 text-red-700"
                                : "bg-gray-100 text-gray-600"
                            }
                          `}
                        >
                          <span className="w-2 h-2 rounded-full bg-current" />
                          {u.status}
                        </span>
                      </td>

                      {/* PROJECTS */}
                      <td className="px-6 py-4 font-semibold text-slate-800">
                        {u.projects}
                      </td>

                      {/* ACTION */}
                      <td className="px-6 py-4 text-right">
                        <button className="opacity-0 group-hover:opacity-100 transition text-sm text-blue-600 hover:underline">
                          Manage
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}


        {/* ===== CARD VIEW ===== */}
        {viewMode === "card" && (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredUsers.map((u) => (
              <div
                key={u.id}
                className="bg-white border rounded-2xl p-6 hover:shadow-lg transition"
              >
                <div className="flex justify-between mb-4">
                  <Avatar name={u.name} />
                  <StatusBadge status={u.status} />
                </div>

                <h3 className="font-bold text-lg text-slate-800">{u.name}</h3>
                <p className="text-sm text-slate-500">{u.email}</p>

                <div className="mt-5 flex justify-between items-center">
                  <span className="text-sm font-medium">{u.role}</span>
                  <span className="text-sm font-semibold">{u.projects} projects</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ===== SLIDE PANEL ===== */}
      {isAddUserOpen && (
        <div className="fixed inset-0 z-50 overflow-x-hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsAddUserOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
            <div className="p-6 border-b flex justify-between">
              <h2 className="text-xl font-bold">Add Team Member</h2>
              <button onClick={() => setIsAddUserOpen(false)}>
                <X />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <input className="w-full px-4 py-3 border rounded-xl" placeholder="Full Name" />
              <input className="w-full px-4 py-3 border rounded-xl" placeholder="Email" />
              <select className="w-full px-4 py-3 border rounded-xl">
                <option>Select Role</option>
                <option>Admin</option>
                <option>Manager</option>
                <option>Editor</option>
              </select>
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                Create Member
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;
