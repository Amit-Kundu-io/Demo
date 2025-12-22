import React, { useState } from 'react';
import { Home, FileText, MessageSquare, Building2, Settings, Bell, Plus, Search, Filter, Calendar, DollarSign, Clock, Eye, ChevronDown, Download, Upload, MoreHorizontal } from 'lucide-react';


const TopNavBar = ({ onMenuClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <button
              onClick={onMenuClick}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
            >
              <MoreHorizontal className="w-5 h-5" />
            </button>
                    {/* Logo */}
            <div className="flex items-center gap-3 mb-10 mt-8">
              <div className="bg-teal-400 text-white font-bold px-3 py-2 rounded-lg ">
                TT
              </div>
              <span className="text-xl font-bold text-gray-900">TendTrix</span>
            </div>
            
          </div>       

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md">
              JD
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default TopNavBar;