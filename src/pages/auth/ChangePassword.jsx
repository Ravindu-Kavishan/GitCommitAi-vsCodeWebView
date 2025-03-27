import React, { useState } from "react";
import loginImage from "../../images/login.svg";
import ContentImage from "../../components/ContentImage";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import passwordimg from "../../images/password.svg";
import { useNavigate } from "react-router";

export default function ChangePassword() {
  const navigate = useNavigate();
  const [passwords, setpasswords] = useState({password:"",confirmPassword:""});

  function submitClicked(e) {
    e.preventDefault();
    console.log(passwords);
    navigate("/CommitHistory");
  }
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#69A2AD] to-[#7315E7] flex justify-center items-center">
      <div className="bg-white w-72 h-fit rounded-xl p-4 shadow-lg">
        <ContentImage image={loginImage} title="Change Password" />
        <div className="flex justify-center">
          <form className="w-full my-2">
            <InputField
              placeholder="Password"
              value={passwords.password}
              onChange={(e) =>
                setpasswords({ ...passwords, password: e.target.value })
              }
              icon={passwordimg}
              type="password"
              isPassword={true}
            />
            <InputField
              placeholder="Confirm Password"
              value={passwords.confirmPassword}
              onChange={(e) =>
                setpasswords({ ...passwords, confirmPassword: e.target.value })
              }
              icon={passwordimg}
              type="password"
              isPassword={true}
            />

            <Button
              text="submit"
              color="#710AF1"
              tcolor="#D4B7FA"
              onClick={submitClicked}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
