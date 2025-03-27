import React, { useState } from "react";
import axios from "axios";
import loginImage from "../../images/login.svg";
import ContentImage from "../../components/ContentImage";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import userimg from "../../images/user.svg";
import passwordimg from "../../images/password.svg";
import { useNavigate } from "react-router";

export default function LogIn() {
  const navigate = useNavigate();
  const [User, setUser] = useState({
    username: "",
    password: "",
  });

  async function loginClicked(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        credentials: "include", // Important for sending cookies
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(User),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Login failed");
      }

      const data = await response.json();

      // Navigate to CommitHistory on successful login
      if (data.admin) {
        localStorage.setItem("admin", true);
      } else {
        localStorage.setItem("admin", false);
      }

      navigate("/ProjectsRules");
    } catch (error) {
      console.error("Login failed:", error.message);
      // alert("Login failed. Please check your credentials.");
    }
  }

  function fpclicked(e) {
    e.preventDefault();
    navigate("/forgetpassword");
  }
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#69A2AD] to-[#7315E7] flex justify-center items-center">
      <div className="bg-white w-72 h-fit rounded-xl p-4 shadow-lg">
        <ContentImage image={loginImage} title="LogIn" />
        <div className="flex justify-center">
          <form className="w-full my-2">
            <InputField
              placeholder="User Name"
              value={User.username}
              onChange={(e) => setUser({ ...User, username: e.target.value })}
              icon={userimg}
            />
            <InputField
              placeholder="Password"
              value={User.password}
              onChange={(e) => setUser({ ...User, password: e.target.value })}
              icon={passwordimg}
              type="password"
              isPassword={true}
            />

            <Button
              text="LogIn"
              color="#710AF1"
              tcolor="#D4B7FA"
              onClick={loginClicked}
            />

            <Button
              text="Forget Password?"
              color="#D4B7FA"
              tcolor="#710AF1"
              onClick={fpclicked}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
