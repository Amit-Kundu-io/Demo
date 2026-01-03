import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Projects from "./features/Projects/Projects";
import Settings from "./features/settings/Settings";
import Team from "./features/Team_management/Team";
import Approval from "./Approval/Approval";
import CompanyDetails from "./features/Projects/CompanyDetails";
import Login from "./Login/Login"
import { useState } from "react";
import Signup from "./Sign in/SignIn";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      {/* Top Bar */}
      <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      {/* Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Page Content */}
        <div className={`flex-1 p-5 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} md:ml-64`}>
          <Routes>
            <Route path="/" element={<div>Welcome! Select a page from the sidebar.</div>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:companyId" element={<CompanyDetails />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/approvals" element={<Approval />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;