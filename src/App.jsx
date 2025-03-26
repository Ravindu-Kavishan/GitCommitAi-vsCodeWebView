import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Welcome from "./pages/auth/Welcome";
import LogIn from "./pages/auth/LogIn";
import ForgetPassword from "./pages/auth/FogetPassword";
import OTP from "./pages/auth/OTP";
import ChangePassword from "./pages/auth/ChangePassword";
import CommitHistory from "./pages/commitHistory/ComitHistory";
import ExplainingCommits from "./pages/commitHistory/ExplainingCommits";
import ProjectRules from "./pages/admin/rules/ProjectRules";
import AddProjects from "./pages/admin/rules/AddProjects";
import AddUsers from "./pages/admin/addUsers/AddUsers";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/OTP" element={<OTP />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/CommitHistory" element={<CommitHistory />} />
          <Route path="/ProjectsRules" element={<ProjectRules />} />
          <Route path="/ExplainingCommits" element={<ExplainingCommits />} />
          <Route path="/AddProjects" element={<AddProjects />} />
          <Route path="/AddUsers" element={<AddUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
