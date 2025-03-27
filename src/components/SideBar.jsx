import React from "react";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  const admin = localStorage.getItem("admin") === "true";

  const getLinkStyle = (path) => {
    return window.location.pathname === path
      ? "text-black underline"
      : "text-white text-lg";
  };

  return (
    <div className="w-fit mt-10 text-amber-600">
      <h2
        className={getLinkStyle("/")}
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        Your Account
      </h2>
      <h2
        className={getLinkStyle("/ProjectsRules")}
        onClick={() => navigate("/ProjectsRules")}
        style={{ cursor: "pointer" }}
      >
        Your Projects
      </h2>
      {admin ? (
        <h2
          className={getLinkStyle("/AddUsers")}
          onClick={() => navigate("/AddUsers")}
          style={{ cursor: "pointer" }}
        >
          Add Users
        </h2>
      ) : (
        <h2
          className={getLinkStyle("/CommitHistory")}
          onClick={() => navigate("/CommitHistory")}
          style={{ cursor: "pointer" }}
        >
          Commit History
        </h2>
      )}
    </div>
  );
}
