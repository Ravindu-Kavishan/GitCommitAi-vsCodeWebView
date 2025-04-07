import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { loginUser } from "../services/UserServices";
import InputField from "../components/InputField";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await loginUser(username, password);
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("role", data.role);

      console.log("Login successful:", data);
      if (data.role === "admin") {
        localStorage.setItem("admin", "true");
        navigate("/adminDashboard");
      } else {
        localStorage.setItem("admin", "false");
        navigate(`/userProfile/${data.userId}`);
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#69A2AD] to-[#7315E7]">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Log In
        </h2>

        {/* Robot Image */}
        <div className="flex justify-center mb-6">
          <img src={"https://res.cloudinary.com/dkyv6zp0a/image/upload/v1743067731/login.svg"} alt="Robot" className="w-40" />
        </div>

        {/* Input Fields using InputField component */}
        <div className="space-y-4">
          <InputField
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            icon={<FaUser className="text-[#7315E7] w-4 h-4" />}
          />

          <InputField
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<FaLock className="text-[#7315E7] w-4 h-4" />}
            isPassword={true}
          />

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-purple-600 text-white py-2 rounded-full font-semibold hover:bg-purple-700 transition shadow-md"
          >
            Login
          </button>

          {/* Forgot Password */}
          <div className="text-center">
            <a
              href="#"
              className="text-purple-500 hover:underline text-sm font-medium"
            >
              Forget Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
