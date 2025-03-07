import React, { useState } from "react";
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
    userName: "",
    password: "",
  });

  function loginClicked(e) {
    e.preventDefault();
    console.log(User);
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
              value={User.userName}
              onChange={(e) =>
                setUser({ ...User, userName: e.target.value })
              }
              icon={userimg}
            />
            <InputField
              placeholder="Password"
              value={User.password}
              onChange={(e) =>
                setUser({ ...User, password: e.target.value })
              }
              icon={passwordimg}
              type="password"
              isPassword={true}
            />

            <Button
              text="Register"
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
