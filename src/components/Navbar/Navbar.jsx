import React, { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { CgProfile } from "react-icons/cg";
import logoImage from "../../assets/logo.png";
import ThemeToggle from "../Theme/ThemeToggle";

const Navbar = () => {
  const { user, singOutUser } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    singOutUser()
      .then(() => {
        toast.success("Sign out successful");
        window.location.href = "/signIn";
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
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

      {user && (
        <li>
          <NavLink to={"/myListing"}>My Listings </NavLink>
        </li>
      )}
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
          <div className="flex items-center gap-1 justify-center">
            <img className="w-9" src={logoImage} alt="" />
            {/* <FaHome size={25} color="text-primary" /> */}
            <h2 className=" text-3xl font-bold text-primary">RomeoMatch</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <ThemeToggle />
          {user ? (
            <div className="md:flex items-center space-x-4">
              <div className="relative group inline-block">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="h-9 w-9 rounded-full object-cover border-2 border-primary cursor-pointer"
                  />
                ) : (
                  <CgProfile className="h-9 w-9 rounded-full border cursor-pointer" />
                )}
                {/* Tooltip */}
                <div className="absolute top-full left-1/2 translate-x-[-50%] mt-2 whitespace-nowrap px-2 py-1 text-sm bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity z-50">
                  {user.displayName || "User"}
                </div>
              </div>

              <button
                onClick={handleLogOut}
                className="btn btn-primary hidden md:block"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-3">
              <Link to="/signIn" className="btn">
                Login
              </Link>
              <div>
                <Link to="/signUp" className="btn btn-primary ">
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
