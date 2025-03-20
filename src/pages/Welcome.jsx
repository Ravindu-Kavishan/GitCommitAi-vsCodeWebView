import React from "react";
import welcomeImage from "../../images/welcome.png";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import ContentImage from "../components/ContentImage";

export default function Welcome() {
  const navigate = useNavigate();
  function loginClicked() {
    navigate("/login");
  }
  function registerClicked() {
    navigate("/Register");
  }
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#69A2AD] to-[#7315E7] flex justify-center items-center">
      <div className="bg-white w-64 h-fit rounded-xl">
        <ContentImage image={welcomeImage} title="Welcome" />
        <div className="pb-4">
          <Button
            text="Register"
            color="#710AF1"
            tcolor="#D4B7FA"
            onClick={registerClicked}
          />
          <Button
            text="Log In"
            color="#D4B7FA"
            tcolor="#710AF1"
            onClick={loginClicked}
          />
        </div>
      </div>
    </div>
  );
}
