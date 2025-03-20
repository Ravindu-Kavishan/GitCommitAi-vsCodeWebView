import React from "react";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="w-fit mt-10">
      <h2>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-black underline" : "text-white text-lg"
          }
        >
          Your Account
        </NavLink>
      </h2>
      <h2>
        <NavLink
          to="/YourProjects"
          className={({ isActive }) =>
            isActive ? "text-black underline" : "text-white text-lg"
          }
        >
          Your Projects
        </NavLink>
      </h2>
      <h2>
        <NavLink
          to="/CommitHistory"
          className={({ isActive }) =>
            isActive ? "text-black underline" : "text-white text-lg"
          }
        >
          Commit History
        </NavLink>
      </h2>
    </div>
  );
}
