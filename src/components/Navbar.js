import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div class="navbar bg-blue-50 px-10 sticky top-0 z-50">
      <div class="navbar-start">
        <Link to="/" class="normal-case text-2xl font-semibold">
          Yasin Arafat
        </Link>
      </div>
      <div class="navbar-end">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarItems}
          </ul>
        </div>
        <div className="hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{navbarItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
