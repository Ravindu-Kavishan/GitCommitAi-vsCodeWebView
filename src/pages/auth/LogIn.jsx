import React, { useState } from "react";
import axios from "axios";
import loginImage from "../../images/login.png";
import ContentImage from "../../components/ContentImage";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import userimg from "../../images/user.png";
import passwordimg from "../../images/password.png";
import { useNavigate } from "react-router";

export default function LogIn() {
  const navigate = useNavigate();
  const [User, setUser] = useState({
    username: "",
    password: "",
  });
  function loginClicked(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8000/login", User, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          // Navigate to CommitHistory on successful login
          if(response.data.admin){
            localStorage.setItem("admin", true);
          }else{
            localStorage.setItem("admin", false);
          }
          navigate("/ProjectsRules");
        }
      })
      .catch((error) => {
        console.error(
          "Login failed:",
          error.response?.data?.detail || error.message
        );
        alert("Login failed. Please check your credentials.");
      });
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
