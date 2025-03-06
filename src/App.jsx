import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./assets/pages/auth/Register";
import Welcome from "./assets/pages/auth/Welcome"
import LogIn from "./assets/pages/auth/LogIn";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/register" element={<Welcome/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
