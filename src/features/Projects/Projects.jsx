import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { 
  Building2, Plus, MessageSquare, Users, Settings, Bell, User,
  Search, Filter, LayoutGrid, List, MapPin, Calendar, FileText,
  ChevronRight, TrendingUp, Clock
} from 'lucide-react';

const ProjectsListPage = () => {
  const navigate = useNavigate(); 
  const [viewMode, setViewMode] = useState('table');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isNewProjectFormOpen, setIsNewProjectFormOpen] = useState(false);
  


  const projects = [
    {
      id: 1,
      name: 'Riverside Commercial Complex',
      address: '123 Harbor Street, Sydney NSW 2000',
      status: 'active',
      pendingVOs: 5,
      lastUpdated: '2024-12-15',
      client: 'Harbor Developments Ltd',
      manager: 'Sarah Chen',
      budget: 8500000,
      completion: 68
    },
    {
      id: 2,
      name: 'Green Valley Residential Towers',
      address: '45 Valley Road, Melbourne VIC 3000',
      status: 'active',
      pendingVOs: 12,
      lastUpdated: '2024-12-14',
      client: 'Green Valley Properties',
      manager: 'James Wilson',
      budget: 15200000,
      completion: 45
    },
    {
      id: 3,
      name: 'Metro Transit Hub Expansion',
      address: '78 Transit Avenue, Brisbane QLD 4000',
      status: 'delayed',
      pendingVOs: 18,
      lastUpdated: '2024-12-10',
      client: 'State Transit Authority',
      manager: 'Emma Thompson',
      budget: 23400000,
      completion: 32
    },
    {
      id: 4,
      name: 'Coastal Medical Center',
      address: '156 Ocean Drive, Gold Coast QLD 4217',
      status: 'active',
      pendingVOs: 3,
      lastUpdated: '2024-12-15',
      client: 'Healthcare Group Pty Ltd',
      manager: 'Michael Zhang',
      budget: 6800000,
      completion: 78
    },
    {
      id: 5,
      name: 'Tech Campus Phase 2',
      address: '89 Innovation Way, Perth WA 6000',
      status: 'active',
      pendingVOs: 7,
      lastUpdated: '2024-12-13',
      client: 'TechCorp Australia',
      manager: 'Lisa Kumar',
      budget: 12100000,
      completion: 55
    },
    {
      id: 6,
      name: 'Harbor Front Development',
      address: '234 Waterfront Boulevard, Adelaide SA 5000',
      status: 'active',
      pendingVOs: 9,
      lastUpdated: '2024-12-12',
      client: 'Waterfront Investments',
      manager: 'David Lee',
      budget: 18900000,
      completion: 41
    },
    {
      id: 7,
      name: 'University Science Building',
      address: '67 Campus Drive, Canberra ACT 2600',
      status: 'completed',
      pendingVOs: 0,
      lastUpdated: '2024-12-08',
      client: 'National University',
      manager: 'Rachel Foster',
      budget: 9500000,
      completion: 100
    },
    {
      id: 8,
      name: 'Downtown Retail Plaza',
      address: '12 Main Street, Hobart TAS 7000',
      status: 'active',
      pendingVOs: 4,
      lastUpdated: '2024-12-14',
      client: 'Retail Group Holdings',
      manager: 'Tom Anderson',
      budget: 7300000,
      completion: 62
    }
  ];

  // Status badge component
  const StatusBadge = ({ status }) => {
    const styles = {
      active: 'bg-green-100 text-green-700 border-green-200',
      delayed: 'bg-red-100 text-red-700 border-red-200',
      completed: 'bg-blue-100 text-blue-700 border-blue-200',
      planning: 'bg-gray-100 text-gray-700 border-gray-200'
    };
    
    const icons = {
      active: <TrendingUp className="w-3 h-3" />,
      delayed: <Clock className="w-3 h-3" />,
      completed: <FileText className="w-3 h-3" />,
      planning: <Calendar className="w-3 h-3" />
    };

    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${styles[status]}`}>
        {icons[status]}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Projects</h1>
            <p className="text-gray-600">Manage and monitor all your construction projects</p>
          </div>
          <button 
            onClick={() => setIsNewProjectFormOpen(true)}
            className="flex items-center gap-2 px-4 md:px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-sm hover:shadow-md"
          >
            <Plus className="w-5 h-5" />
            New Project
          </button>
        </div>

        {/* Controls Bar */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6">
          <div className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Left side - Search and Filter */}
            <div className="flex items-center gap-3 flex-1 w-full md:w-auto">
              <div className="relative flex-1 md:flex-initial md:w-80">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text"
                  placeholder="Search by project name or address..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <select 
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white cursor-pointer"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="delayed">Delayed</option>
                  <option value="completed">Completed</option>
                  <option value="planning">Planning</option>
                </select>
                <Filter className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Right side - View Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
              <button 
                onClick={() => setViewMode('table')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'table' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="w-4 h-4" />
                Table
              </button>
              <button 
                onClick={() => setViewMode('card')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'card' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                Cards
              </button>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredProjects.length}</span> of <span className="font-semibold text-gray-900">{projects.length}</span> projects
          </p>
        </div>

        {/* Table View */}
        {viewMode === 'table' && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Project Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden sm:table-cell">
                      Address
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Pending VOs
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell">
                      Last Updated
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredProjects.map((project) => (
                    <tr 
                      key={project.id} 
                      className="hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => navigate(`/projects/${project.id}`, { state: project })}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                            <Building2 className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{project.name}</p>
                            <p className="text-xs text-gray-500">{project.client}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 hidden sm:table-cell">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-700">{project.address}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={project.status} />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`text-lg font-bold ${
                            project.pendingVOs > 10 ? 'text-red-600' : 
                            project.pendingVOs > 5 ? 'text-yellow-600' : 
                            'text-gray-900'
                          }`}>
                            {project.pendingVOs}
                          </span>
                          {project.pendingVOs > 0 && (
                            <FileText className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-700">{formatDate(project.lastUpdated)}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button 
                          className="flex items-center gap-1 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg text-sm font-semibold transition-colors"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent row click from triggering
                            navigate(`/projects/${project.id}`);
                          }}
                        >
                          Open
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty state */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
                <button 
                  onClick={() => { setSearchQuery(''); setFilterStatus('all'); }}
                  className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg text-sm font-semibold transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Card View */}
        {viewMode === 'card' && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 overflow-hidden group"
                onClick={() => navigate('/dashboard/vieworder')} // Correct route for ViewOrder page
              >
                {/* Card Header */}
                <div className="bg-linear-to-r from-blue-600 to-purple-600 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <StatusBadge status={project.status} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{project.name}</h3>
                  <p className="text-sm text-blue-100">{project.client}</p>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-start gap-2 mb-4 pb-4 border-b border-gray-200">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-700">{project.address}</p>
                  </div>

                  {/* Completion Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600 font-medium">Completion</span>
                      <span className="font-bold text-gray-900">{project.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          project.completion >= 70 ? 'bg-green-500' : 
                          project.completion >= 40 ? 'bg-blue-500' : 'bg-yellow-500'
                        }`}
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Pending VOs</p>
                      <p className={`text-2xl font-bold ${
                        project.pendingVOs > 10 ? 'text-red-600' : 
                        project.pendingVOs > 5 ? 'text-yellow-600' : 
                        'text-gray-900'
                      }`}>
                        {project.pendingVOs}
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Budget</p>
                      <p className="text-xl font-bold text-gray-900">
                        ${(project.budget / 1000000).toFixed(1)}M
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-700">{project.manager}</span>
                    </div>
                    <button className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors group-hover:shadow-md">
                      Open
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Last Updated */}
                  <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>Updated {formatDate(project.lastUpdated)}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Empty state for cards */}
            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center py-16">
                <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
                <button 
                  onClick={() => { setSearchQuery(''); setFilterStatus('all'); }}
                  className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg text-sm font-semibold transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* New Project Slider Form */}
      {isNewProjectFormOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay - Click to close (covers main content area only) */}
          <div 
            className="absolute inset-0 .right-[28rem]"
            onClick={() => setIsNewProjectFormOpen(false)}
          ></div>
          
          {/* Slider */}
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-all duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Create New Project</h2>
                <button 
                  onClick={() => setIsNewProjectFormOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Form */}
              <div className="flex-1 overflow-y-auto p-6">
                <form className="space-y-6">
                  {/* Project Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter project name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Client */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Client *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter client name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Address *
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Enter project address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Budget (AUD)
                    </label>
                    <input
                      type="number"
                      placeholder="Enter budget amount"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Project Manager */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Manager
                    </label>
                    <input
                      type="text"
                      placeholder="Enter project manager name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Start Date */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Enter project description"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                </form>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
                <button 
                  onClick={() =>  navigate(`/projects/${projects.id}`, { state: projects })}
                  className="px-6 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Create Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsListPage;