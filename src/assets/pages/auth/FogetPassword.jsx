import React, { useState } from "react";
import loginImage from "../../images/login.png";
import ContentImage from "../../components/ContentImage";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import emailimg from "../../images/email.png";
import { useNavigate } from "react-router";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");

  function sendOTPClicked(e) {
    e.preventDefault();
    console.log(email);
    navigate("/OTP");
  }
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#69A2AD] to-[#7315E7] flex justify-center items-center">
      <div className="bg-white w-72 h-fit rounded-xl p-4 shadow-lg">
        <ContentImage image={loginImage} title="Forget Password" />
        <div className="flex justify-center">
          <form className="w-full my-2">
            <InputField
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setemail(e.target.value)
              }
              icon={emailimg}
            />

            <Button
              text="send OTP"
              color="#710AF1"
              tcolor="#D4B7FA"
              onClick={sendOTPClicked}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
