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
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* LEFT */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onMenuClick}
              className="md:hidden p-1.5 sm:p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <MoreHorizontal className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-teal-400 text-white font-bold px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-sm sm:text-base">
                TT
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900">
                TendTrix
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 sm:gap-3 relative" ref={profileRef}>
            <button className="relative p-1.5 sm:p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></span>
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
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shadow-md"
                />
              ) : (
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm shadow-md">
                  {initials}
                </div>
              )}
            </button>

            {/* ================= PROFILE DROPDOWN ================= */}
            {showProfileMenu && (
              <div className="absolute right-0 top-12 sm:top-14 w-48 sm:w-56 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">

                {/* USER INFO */}
                <div className="px-3 sm:px-4 py-2 sm:py-3 border-b">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">
                    {initials}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    View and manage profile
                  </p>
                </div>

                {/* ACTIONS */}
                <button
                  onClick={() => {
                    navigate('/settings');
                    setShowProfileMenu(false);
                  }}
                  className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 hover:bg-gray-50 text-xs sm:text-sm"
                >
                  <User size={14} /> My Profile
                </button>

                <button
                  onClick={() => {
                    navigate('/settings');
                    setShowProfileMenu(false);
                  }}
                  className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 hover:bg-gray-50 text-xs sm:text-sm"
                >
                  <Settings size={14} /> Settings
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 hover:bg-red-50 text-red-600 text-xs sm:text-sm"
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
