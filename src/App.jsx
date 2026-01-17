import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Projects from "./features/Projects/Projects";
import Settings from "./features/settings/Settings";
import Team from "./features/Team_management/Team";
import Approval from "./features/Approval/Approval";
import CompanyDetails from "./features/Projects/CompanyDetails";
import Login from "./features/auth/Login/Login"
import Signup from "./features/auth/Sign in/SignIn";
import Auth from "./features/auth/otp/Auth";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth" element={<Auth />} />
        
        {/* Main App Routes */}
        <Route element={
          <>
            {/* Top Bar */}
            <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

            {/* Body */}
            <div className="flex flex-1">
              {/* Sidebar */}
              <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

              {/* Page Content */}
              <div className={`flex-1 p-5 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} md:ml-64`}>
                <Routes>
                  <Route path="/" element={<Navigate to="/projects" />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/:companyId" element={<CompanyDetails />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/approvals" element={<Approval />} />
                </Routes>
              </div>
            </div>
          </>
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;