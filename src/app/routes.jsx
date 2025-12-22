import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Projects from "../features/Projects/Projects";
import Settings from "../features/settings/Settings";
import Team from "../features/Team_management/Team"
import Approval from "../Approval/Approval";
import CompanyDetails from "../features/Projects/CompanyDetails";

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
    </Routes>
  );
}

