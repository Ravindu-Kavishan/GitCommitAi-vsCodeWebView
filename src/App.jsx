import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./assets/pages/auth/Register";
import Welcome from "./assets/pages/auth/Welcome"
import LogIn from "./assets/pages/auth/LogIn";
import ForgetPassword from "./assets/pages/auth/FogetPassword";
import OTP from "./assets/pages/auth/OTP";
import ChangePassword from "./assets/pages/auth/ChangePassword";
import CommitHistory from "./assets/pages/commitHistory/ComitHistory";
import ExplainingCommits from "./assets/pages/commitHistory/ExplainingCommits";

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
          <Route path="/CommitHistory" element={<CommitHistory/>}/>
          <Route path="/ExplainingCommits" element={<ExplainingCommits/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
