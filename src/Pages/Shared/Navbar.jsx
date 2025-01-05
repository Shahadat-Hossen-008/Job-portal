import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const links = <>
         <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
    </>
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto space-y-5 font-lato">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Job Portal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {links}
         </ul>
        </div>
      <div className="navbar-end">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <Link to={'register'} className="mr-3">
        <Button variant="outlined" className="p-3">Register</Button>
        </Link>
        <Link>
        <Button variant="contained" className="p-3">Sign In</Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;