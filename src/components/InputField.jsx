import React, { useState } from "react";
import eyeimg from "../images/eye.png";
import eyeclosedimg from "../images/eye-closed.png";

export default function InputField({
  placeholder,
  value,
  onChange,
  icon,
  type = "text",
  isPassword = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === "string") {
      return <img src={icon} className="w-4 mr-2 self-center" alt="icon" />;
    } else {
      return <span className="mr-2 self-center text-[#7315E7] text-sm">{icon}</span>;
    }
  };

  return (
    <div className="flex justify-center">
      <div className="rounded-4xl bg-[#D4B7FA] w-11/12 flex items-center px-3 mb-2 py-1 border-2 border-transparent hover:border-black transition duration-300">
        {renderIcon()}
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-transparent outline-none placeholder-[#7315E7] text-[#7315E7] w-full text-sm"
        />
        {isPassword && (
          <img
            src={showPassword ? eyeclosedimg : eyeimg}
            className="w-4 ml-2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
            alt="Toggle Password"
          />
        )}
      </div>
    </div>
  );
}
