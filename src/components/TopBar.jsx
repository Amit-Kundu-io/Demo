import React, { useEffect, useRef, useState } from 'react';
import { Bell, MoreHorizontal, User, LogOut, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopNavBar = ({ onMenuClick }) => {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(null);
  const [initials, setInitials] = useState('U');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const profileRef = useRef(null);

  /* ================= LOAD PROFILE ================= */
  const loadProfile = () => {
    const img = localStorage.getItem('profileImage');
    const user = JSON.parse(localStorage.getItem('userName'));

    setProfileImage(img);

    if (user) {
      setInitials(
        `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase()
      );
    }
  };

  useEffect(() => {
    loadProfile();
    window.addEventListener('profile-updated', loadProfile);

    return () => {
      window.removeEventListener('profile-updated', loadProfile);
    };
  }, []);

  /* ================= CLOSE ON OUTSIDE CLICK ================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /* ================= LOGOUT ================= */
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login'); // change route if needed
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-12 sm:h-14 lg:h-16">

          {/* LEFT */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
            <button
              onClick={onMenuClick}
              className="md:hidden p-1 sm:p-1.5 lg:p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <MoreHorizontal className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
              <div className="bg-teal-400 text-white font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 lg:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm lg:text-base">
                TT
              </div>
              <span className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 truncate">
                TendTrix
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 relative" ref={profileRef}>
            <button className="relative p-1 sm:p-1.5 lg:p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* AVATAR BUTTON */}
            <button
              onClick={() => setShowProfileMenu(prev => !prev)}
              className="focus:outline-none"
            >
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full object-cover shadow-md"
                />
              ) : (
                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm shadow-md">
                  {initials}
                </div>
              )}
            </button>

            {/* ================= PROFILE DROPDOWN ================= */}
            {showProfileMenu && (
              <div className="absolute right-0 top-10 sm:top-12 lg:top-14 w-44 sm:w-48 lg:w-56 bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">

                {/* USER INFO */}
                <div className="px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-3 border-b">
                  <p className="font-semibold text-gray-800 text-xs sm:text-sm lg:text-base">
                    {initials}
                  </p>
                  <p className="text-xs text-gray-500 hidden sm:block">
                    View and manage profile
                  </p>
                </div>

                {/* ACTIONS */}
                <button
                  onClick={() => {
                    navigate('/settings');
                    setShowProfileMenu(false);
                  }}
                  className="w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-3 hover:bg-gray-50 text-xs sm:text-sm"
                >
                  <User size={14} /> My Profile
                </button>

                <button
                  onClick={() => {
                    navigate('/settings');
                    setShowProfileMenu(false);
                  }}
                  className="w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-3 hover:bg-gray-50 text-xs sm:text-sm"
                >
                  <Settings size={14} /> Settings
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-3 hover:bg-red-50 text-red-600 text-xs sm:text-sm"
                >
                  <LogOut size={14} /> Logout
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
