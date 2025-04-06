import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import UserRegister from "./pages/UserRegister";
import UserProfile from "./pages/UserProfile";
import UserLogin from "./pages/UserLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { Navigate } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/userRegister" element={<UserRegister />} />
          <Route path="/userProfile/:userId" element={<UserProfile />} />
          <Route path="/userLogin" element={<UserLogin />} />
          <Route
            path="/adminDashboard"
            element={
              localStorage.getItem("role") === "admin" ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
