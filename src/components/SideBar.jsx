import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { name: "Project", path: "/projects" },
    { name: "Team Management", path: "/team" },
    { name: "Approvals", path: "/approvals" },
    { name: "Setting", path: "/settings" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent  z-20 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-16 left-0 w-64
          h-[calc(100vh-4rem)]
          bg-white border-r border-gray-200
          px-5 py-6 z-30
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Close button (mobile only) */}
        <button
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >   
         
          <X className="w-5 h-5" />
        </button>

        {/* Menu */}
        <ul className="space-y-2 overflow-y-auto h-full">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg text-sm transition
                ${
                  isActive
                    ? "bg-teal-50 text-teal-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-100 pl-2"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
