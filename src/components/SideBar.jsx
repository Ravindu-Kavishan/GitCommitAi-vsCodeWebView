import React from "react";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const admin = localStorage.getItem("admin") === "true";
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
          to="/ProjectsRules"
          className={({ isActive }) =>
            isActive ? "text-black underline" : "text-white text-lg"
          }
        >
          Your Projects
        </NavLink>
      </h2>

      {admin === "true" ? (
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
      ) : (
        <h2>
          <NavLink
            to="/AddUsers"
            className={({ isActive }) =>
              isActive ? "text-black underline" : "text-white text-lg"
            }
          >
            Add Users
          </NavLink>
        </h2>
      )}
    </div>
  );
}
