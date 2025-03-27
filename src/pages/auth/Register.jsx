import React, { useState } from "react";
import registerImage from "../../images/register.svg";
import ContentImage from "../../components/ContentImage";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import emailimg from "../../images/email.svg";
import userimg from "../../images/user.svg";
import passwordimg from "../../images/password.svg";

export default function Register() {
  const [newUser, setNewUser] = useState({
    userName: "",
    email: "",
    password: "",
    Confirmpassword:""
  });

  function registerClicked(e) {
    e.preventDefault();
    console.log(newUser);
    navigate("/CommitHistory");
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#69A2AD] to-[#7315E7] flex justify-center items-center">
      <div className="bg-white w-80 h-fit rounded-xl p-4 shadow-lg">
        <ContentImage image={registerImage} title="Register" />
        <div className="flex justify-center">
          <form className="w-full my-4">

            <InputField
              placeholder="User Name"
              value={newUser.userName}
              onChange={(e) =>
                setNewUser({ ...newUser, userName: e.target.value })
              }
              icon={userimg}
            />


            <InputField
              placeholder="Email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              icon={emailimg}
            />


            <InputField
              placeholder="Password"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
              icon={passwordimg}
              type="password"
              isPassword={true}
            />
            <InputField
              placeholder="Confirm Password"
              value={newUser.Confirmpassword}
              onChange={(e) =>
                setNewUser({ ...newUser, Confirmpassword: e.target.value })
              }
              icon={passwordimg}
              type="password"
              isPassword={true}
            />

            <Button
              text="Register"
              color="#710AF1"
              tcolor="#D4B7FA"
              onClick={registerClicked}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
