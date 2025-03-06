import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./assets/pages/auth/Register";
import Welcome from "./assets/pages/auth/Welcome"
import LogIn from "./assets/pages/auth/LogIn";
import ForgetPassword from "./assets/pages/auth/FogetPassword";
import OTP from "./assets/pages/auth/OTP";
import ChangePassword from "./assets/pages/auth/ChangePassword";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/register" element={<Register/>} />
          <Route path ="/forgetpassword" element={<ForgetPassword/>}/>
          <Route path ="/OTP" element={<OTP/>}/>
          <Route path ="/ChangePassword" element={<ChangePassword/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
