import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import icon from "../../assets/jobicon100.png";
function Navbar() {
  const { signOutUser, user } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        
        console.log("Sign Out Successful");
      })
      .catch((err) => {
        console.log("Error occur");
      });
  };
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <a>Parent</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );
  return (
    <div className="navbar w-11/12 mx-auto space-y-5 font-lato">
      <div className="navbar-start">
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
        <img src={icon} className="w-[40px]" />
        <Link to={"/"} className="text-xl">
          Job Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <Button onClick={handleSignOut} variant="contained" className="p-3">
              Sign Out
            </Button>
            <div title={user?.displayName} className="w-10  ml-3">
              <img
                referrerPolicy="no-referrer"
                alt="User Profile Photo"
                src={user?.photoURL}
                className="rounded-full"
              />
            </div>
          </>
        ) : (
          <>
            <Link to={"/register"} className="mr-3">
              <Button variant="outlined" className="p-3">
                Register
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="contained" className="p-3">
                Sign In
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
