import React from "react";
import { FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addToFindRoomMate"}>Add To Find Roommate</NavLink>
      </li>
      <li>
        <NavLink to={"/browseListing"}>Browse Listing</NavLink>
      </li>
      <li>
        <NavLink to={"/myListing"}>My Listings </NavLink>
      </li>
    </>
  );
  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <FaHome size={25} color="text-primary" />
            <h2 className=" text-3xl font-bold text-primary">RomeoMatch</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <Link to={"/signIn"} className="btn hover:btn-secondary">
            Sign In
          </Link>
          <Link to={"/signUp"} className="btn btn-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
