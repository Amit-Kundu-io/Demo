
// export default function Team() {
//   return (
//     <div className="p-4 md:p-6 lg:p-8">
//       <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Team Management</h2>
//       <p className="text-gray-600 mb-4">This is the Team Management page content.</p>
//       <p className="text-gray-500">in maintenance mode</p>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Building2, Bell, Search, Filter, Plus, Edit, Trash2, UserPlus, Shield, Users, Mail, Phone, Calendar, Check, X, ChevronDown, Download, Upload } from 'lucide-react';

// SCREEN 10: Company Management (Users & Roles)
const CompanyScreen = () => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [showRolesModal, setShowRolesModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const users = [
    {
      id: 1,
      name: 'Sarah Chen',
      email: 'sarah.chen@tendtrix.com',
      phone: '+971 50 123 4567',
      role: 'Architect',
      status: 'Active',
      assignedProjects: ['Marina Bay Construction', 'Downtown Tower'],
      joinDate: 'Jan 15, 2023',
      lastActive: '2 min ago',
      avatar: 'SC'
    },
    {
      id: 2,
      name: 'David Lee',
      email: 'david.lee@tendtrix.com',
      phone: '+971 50 234 5678',
      role: 'Quantity Surveyor',
      status: 'Active',
      assignedProjects: ['Marina Bay Construction', 'Downtown Tower', 'Residential Complex A'],
      joinDate: 'Feb 20, 2023',
      lastActive: '10 min ago',
      avatar: 'DL'
    },
    {
      id: 3,
      name: 'John Smith',
      email: 'john.smith@tendtrix.com',
      phone: '+971 50 345 6789',
      role: 'Site Engineer',
      status: 'Active',
      assignedProjects: ['Marina Bay Construction'],
      joinDate: 'Mar 10, 2023',
      lastActive: '1 hour ago',
      avatar: 'JS'
    },
    {
      id: 4,
      name: 'Mike Johnson',
      email: 'mike.johnson@tendtrix.com',
      phone: '+971 50 456 7890',
      role: 'Project Manager',
      status: 'Active',
      assignedProjects: ['Marina Bay Construction', 'Downtown Tower'],
      joinDate: 'Jan 5, 2023',
      lastActive: '3 hours ago',
      avatar: 'MJ'
    },
    {
      id: 5,
      name: 'Emma Davis',
      email: 'emma.davis@tendtrix.com',
      phone: '+971 50 567 8901',
      role: 'Site Engineer',
      status: 'Active',
      assignedProjects: ['Downtown Tower', 'Residential Complex A'],
      joinDate: 'Apr 12, 2023',
      lastActive: '5 hours ago',
      avatar: 'ED'
    },
    {
      id: 6,
      name: 'Tom Wilson',
      email: 'tom.wilson@tendtrix.com',
      phone: '+971 50 678 9012',
      role: 'Contractor',
      status: 'Inactive',
      assignedProjects: ['Residential Complex A'],
      joinDate: 'May 8, 2023',
      lastActive: '2 days ago',
      avatar: 'TW'
    },
    {
      id: 7,
      name: 'Lisa Anderson',
      email: 'lisa.anderson@tendtrix.com',
      phone: '+971 50 789 0123',
      role: 'Architect',
      status: 'Active',
      assignedProjects: ['Downtown Tower'],
      joinDate: 'Jun 15, 2023',
      lastActive: '1 day ago',
      avatar: 'LA'
    }
  ];

  const roles = [
    { name: 'Owner', color: 'purple', permissions: ['All permissions', 'Final approval authority', 'Financial oversight'] },
    { name: 'Project Manager', color: 'blue', permissions: ['Project oversight', 'Team coordination', 'Report access'] },
    { name: 'Architect', color: 'green', permissions: ['Technical validation', 'Drawing approval', 'Design review'] },
    { name: 'Quantity Surveyor', color: 'yellow', permissions: ['Cost estimation', 'VO pricing', 'Budget tracking'] },
    { name: 'Site Engineer', color: 'orange', permissions: ['VO submission', 'Site documentation', 'RFI creation'] },
    { name: 'Contractor', color: 'red', permissions: ['Limited access', 'Document view', 'Communication'] }
  ];

  const getRoleBadgeColor = (role) => {
    const colors = {
      'Owner': 'bg-purple-100 text-purple-700 border-purple-200',
      'Project Manager': 'bg-blue-100 text-blue-700 border-blue-200',
      'Architect': 'bg-green-100 text-green-700 border-green-200',
      'Quantity Surveyor': 'bg-yellow-100 text-yellow-700 border-yellow-200',
      'Site Engineer': 'bg-orange-100 text-orange-700 border-orange-200',
      'Contractor': 'bg-red-100 text-red-700 border-red-200'
    };
    return colors[role] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowEditUserModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <TopNavBar /> */}
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Company Management</h1>
          <p className="text-gray-600">Manage users, roles, and permissions across your organization</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{users.length}</p>
            <p className="text-sm text-green-600 mt-1">+2 this month</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-600">Active Users</p>
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{users.filter(u => u.status === 'Active').length}</p>
            <p className="text-sm text-gray-500 mt-1">86% active rate</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-600">Roles</p>
              <Shield className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{roles.length}</p>
            <button onClick={() => setShowRolesModal(true)} className="text-sm text-blue-600 hover:underline mt-1">
              Manage Roles
            </button>
          </div>
          
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-600">Projects</p>
              <Building2 className="w-5 h-5 text-yellow-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">3</p>
            <p className="text-sm text-gray-500 mt-1">Active projects</p>
          </div>
        </div>

        {/* Actions and Filters Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 mb-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 flex items-center gap-3">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search users by name or email..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Role Filter */}
              <select 
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Roles</option>
                <option value="owner">Owner</option>
                <option value="pm">Project Manager</option>
                <option value="architect">Architect</option>
                <option value="qs">Quantity Surveyor</option>
                <option value="engineer">Site Engineer</option>
                <option value="contractor">Contractor</option>
              </select>

              {/* Status Filter */}
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition flex items-center gap-2 text-sm font-medium">
                <Download className="w-4 h-4" />
                Export
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition flex items-center gap-2 text-sm font-medium">
                <Upload className="w-4 h-4" />
                Import
              </button>
              <button 
                onClick={() => setShowAddUserModal(true)}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2 font-medium shadow-md"
              >
                <Plus className="w-4 h-4" />
                Add User
              </button>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Assigned Projects</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Last Active</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map(user => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm shadow">
                        {user.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">Joined {user.joinDate}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getRoleBadgeColor(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <div className="flex items-center gap-1.5 text-gray-700 mb-1">
                        <Mail className="w-3.5 h-3.5 text-gray-400" />
                        <span className="truncate">{user.email}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <Phone className="w-3.5 h-3.5 text-gray-400" />
                        <span>{user.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold text-blue-600">{user.assignedProjects.length}</span>
                      <span className="text-sm text-gray-600">projects</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate max-w-xs">
                      {user.assignedProjects.join(', ')}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {user.lastActive}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleEditUser(user)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        title="Edit user"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        title="Delete user"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing <span className="font-medium">1-{users.length}</span> of <span className="font-medium">{users.length}</span> users
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddUserModal && (
        <Modal onClose={() => setShowAddUserModal(false)} title="Add New User">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Doe" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="john.doe@company.com" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
              <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+971 50 123 4567" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Select role</option>
                {roles.map(role => (
                  <option key={role.name} value={role.name}>{role.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Assign Projects</label>
              <select multiple className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" size="3">
                <option>Marina Bay Construction</option>
                <option>Downtown Tower</option>
                <option>Residential Complex A</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
            </div>

            <div className="flex gap-3 pt-4">
              <button onClick={() => setShowAddUserModal(false)} className="flex-1 px-4 py-2.5 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition">
                Cancel
              </button>
              <button className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Add User
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Roles Management Modal */}
      {showRolesModal && (
        <Modal onClose={() => setShowRolesModal(false)} title="Manage Roles & Permissions" size="large">
          <div className="space-y-4">
            {roles.map(role => (
              <div key={role.name} className="p-5 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Shield className={`w-6 h-6 text-${role.color}-600`} />
                    <div>
                      <h4 className="font-bold text-gray-900">{role.name}</h4>
                      <p className="text-sm text-gray-600">{users.filter(u => u.role === role.name).length} users</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Edit Permissions
                  </button>
                </div>
                <div className="space-y-1">
                  {role.permissions.map((perm, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-gray-700">{perm}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};

// Modal Component
const Modal = ({ onClose, title, children, size = 'default' }) => {
  const sizeClasses = {
    default: 'max-w-md',
    large: 'max-w-2xl'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`bg-white rounded-2xl shadow-2xl w-full ${sizeClasses[size]} max-h-[90vh] overflow-y-auto`}>
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

// Top Navigation Bar Component
// const TopNavBar = () => {
//   const menuItems = [
//     { name: 'Projects', active: false },
//     { name: 'Reports', active: false },
//     { name: 'Messages', active: false },
//     { name: 'Company', active: true },
//     { name: 'Settings', active: false }
//   ];

//   return (
//     <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center gap-3">
//             <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg shadow-md">
//               <Building2 className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-xl font-bold text-gray-900">TendTrix</span>
//           </div>

//           <div className="flex items-center gap-1">
//             {menuItems.map((item, idx) => (
//               <button
//                 key={idx}
//                 className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
//                   item.active ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
//                 }`}
//               >
//                 {item.name}
//               </button>
//             ))}
//           </div>

//           <div className="flex items-center gap-3">
//             <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
//               <Bell className="w-5 h-5" />
//               <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//             </button>
//             <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md">
//               AD
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

export default CompanyScreen;

