import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
      <div className="max-w-[1300px] m-auto px-5">
        <header className="flex justify-between items-center py-4">
          <NavLink
            className="flex gap-2 items-center text-2xl font-bold"
            to="/"
          >
            <span className="text-white">Logo</span>
          </NavLink>
          <ul className="flex justify-between items-center gap-8 text-sm font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 hover:text-indigo-400 transition duration-300"
                    : "hover:text-indigo-400 transition duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 hover:text-indigo-400 transition duration-300"
                    : "hover:text-indigo-400 transition duration-300"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="products"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 hover:text-indigo-400 transition duration-300"
                    : "hover:text-indigo-400 transition duration-300"
                }
              >
                Products
              </NavLink>
            </li>
          </ul>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300">
            <NavLink to="login" className="text-white">
              Login
            </NavLink>
          </button>
        </header>
      </div>
    </div>
  );
};

export default Header;
