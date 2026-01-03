import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Projects from "../features/Projects/Projects";
import Settings from "../features/settings/Settings";
import Team from "../features/Team_management/Team"
import Approval from "../features/Approval/Approval";
import CompanyDetails from "../features/Projects/CompanyDetails";
import Login from "../Login/Login";
import Signup from "../Sign in/SignIn";
import Auth from "../components/Auth"

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/projects" />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:companyId" element={<CompanyDetails />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/team" element={<Team />} />
        <Route path="/approvals" element={<Approval />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Auth" element={<Auth/>} />
    </Routes>
  );
}

