import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [path, setPath] = useState(false);
  useEffect(() => {
    if (location.pathname === "/") {
      setPath(true);
    }
    else{
      setPath(false)
    }
  }, [location.pathname]);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const navbarItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );
  return (
    <div
      className={
        path
          ? colorChange
            ? "navbar bg-blue-50 px-10 sticky top-0 z-50 shadow"
            : "navbar px-10 sticky top-0 z-50"
          : "navbar bg-blue-50 px-10 sticky top-0 z-50 shadow"
      }
    >
      <div class="navbar-start"></div>
      <div class="navbar-center">
        <div className="hidden lg:flex">
          <ul class="menu menu-horizontal p-0 text-lg">{navbarItems}</ul>
        </div>
      </div>
      <div className="navbar-end">
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
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-zinc-100 rounded-box w-52"
          >
            {navbarItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
