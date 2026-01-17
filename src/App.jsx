import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./app/layouts/MainLayout";
import Projects from "./features/Projects/Projects";
import Settings from "./features/settings/Settings";
import Team from "./features/Team_management/Team";
import Approval from "./features/Approval/Approval";
import CompanyDetails from "./features/Projects/CompanyDetails";
import Login from "./features/auth/Login/Login"
import Signup from "./features/auth/Sign in/SignIn";
import Auth from "./features/auth/otp/Auth";

function App() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/auth" element={<Auth />} />
      
      {/* Main App Routes with Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/projects" />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:companyId" element={<CompanyDetails />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/team" element={<Team />} />
        <Route path="/approvals" element={<Approval />} />
      </Route>
    </Routes>
  );
}

export default App;