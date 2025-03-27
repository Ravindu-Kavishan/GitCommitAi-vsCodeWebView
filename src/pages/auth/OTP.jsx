import React, { useState } from "react";
import ContentImage from "../../components/ContentImage";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { useNavigate } from "react-router";

export default function OTP() {
  const navigate = useNavigate();
  const [OTP, setOTP] = useState("");

  function submitClicked(e) {
    e.preventDefault();
    console.log(OTP);
    navigate("/ChangePassword");
  }

  function RSClicked(e) {
    e.preventDefault();
    setOTP("");
    console.log(OTP);
  }
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#69A2AD] to-[#7315E7] flex justify-center items-center">
      <div className="bg-white w-72 h-fit rounded-xl p-4 shadow-lg">
        <ContentImage
          image="https://res.cloudinary.com/dkyv6zp0a/image/upload/v1743067731/login.svg"
          title="Type OTP"
        />
        <div className="flex justify-center">
          <form className="w-full my-2">
            <InputField
              placeholder="OTP"
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
              icon='https://res.cloudinary.com/dkyv6zp0a/image/upload/v1743068293/otp.svg'
            />

            <Button
              text="Submit"
              color="#710AF1"
              tcolor="#D4B7FA"
              onClick={submitClicked}
            />
            <Button
              text="Resend OTP"
              color="#D4B7FA"
              tcolor="#710AF1"
              onClick={RSClicked}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
