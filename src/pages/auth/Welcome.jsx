import React from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import ContentImage from "../components/ContentImage";

export default function Welcome() {
  const navigate = useNavigate();

  function loginClicked() {
    navigate("/userLogin");
  }

  function registerClicked() {
    navigate("/userRegister");
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#69A2AD] to-[#7315E7] flex justify-center items-center">
      <div className="bg-white w-64 h-fit rounded-xl">
        <ContentImage
          image="https://res.cloudinary.com/dkyv6zp0a/image/upload/v1743068585/welcome.svg"
          title="Welcome"
        />
      </div>
      <div className="pb-4">
        <div className="bg-white w-80 h-fit rounded-2xl shadow-2xl p-6">
          {/* Buttons */}
          <div className="pt-6 space-y-4">
            <Button
              text="Register"
              color="#710AF1"
              tcolor="#D4B7FA"
              onClick={registerClicked}
              className="w-full py-2 rounded-full font-semibold text-lg"
            />
            <Button
              text="Log In"
              color="#D4B7FA"
              tcolor="#710AF1"
              onClick={loginClicked}
              className="w-full py-2 rounded-full font-semibold text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
