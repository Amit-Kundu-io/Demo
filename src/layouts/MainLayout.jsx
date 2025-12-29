import { Outlet } from "react-router-dom";
import { useState } from "react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col ">
      {/* Top Bar */}
      <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      {/* Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Page Content */}
        <div className={`flex-1 p-5 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} md:ml-64`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
