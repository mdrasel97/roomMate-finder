import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { CgProfile } from "react-icons/cg";
import logoImage from "../../assets/logo.png";
import ThemeToggle from "../Theme/ThemeToggle";
import { Typewriter } from "react-simple-typewriter";
import { Menu } from "@headlessui/react";
import {
  ChevronDownIcon,
  TrashIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import LogOut from "../LogOut";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  // const navigate = useNavigate();
  // const handleLogOut = () => {
  //   singOutUser()
  //     .then(() => {
  //       toast.success("Sign out successful");
  //       window.location.href = "/signIn";
  //     })
  //     .catch((error) => {
  //       toast.error(error.message);
  //     });
  // };

  // update profile
  // const handleProfileClick = () => {
  //   navigate("/profile");
  // };
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/browseListing"}>Browse Listing</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          {/* <li>
            <NavLink to={"/addToFindRoomMate"}>Add Roommate</NavLink>
          </li>
          <li>
            <NavLink to={"/myListing"}>My Listings </NavLink>
          </li> */}
        </>
      )}
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50 lg:container mx-auto">
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
              {user ? (
                <>{/* <LogOut /> */}</>
              ) : (
                <div className="w-full space-y-3 mt-2">
                  <div className="w-full">
                    <Link
                      to="/signIn"
                      className="btn border border-primary w-full"
                    >
                      Login
                    </Link>
                  </div>
                  <div>
                    <Link to="/signUp" className="btn btn-primary w-full">
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}
            </ul>
          </div>
          <div className="flex items-center gap-1 justify-center">
            <img className="w-6 md:w-9 rounded-md" src={logoImage} alt="" />
            <h2 className="text-lg md:text-3xl font-bold text-primary">
              <Typewriter
                words={["RoomieMatch", "RoommateFinder"]}
                loop={0}
                // cursor
                // cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <ThemeToggle />
          {user ? (
            <div className="md:flex items-center space-x-4">
              <Menu as="div" className="relative group inline-block">
                <Menu.Button className="flex items-center gap-1 focus:outline-none">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || "User"}
                      className="h-9 w-9 rounded-full object-cover border-2 border-primary cursor-pointer"
                    />
                  ) : (
                    <div className="h-9 w-9  rounded-full flex items-center justify-center">
                      U
                    </div>
                  )}
                  <ChevronDownIcon className="h-4 w-4" />
                </Menu.Button>

                <Menu.Items className="absolute right-0 z-50 mt-2 w-52 origin-top-right rounded-xl  backdrop-blur-md p-1 text-sm shadow-lg ring-1 bg-black text-white focus:outline-none">
                  <Menu.Item>
                    <p className="text-lg font-semibold text-center my-2">
                      {user.displayName}
                    </p>
                  </Menu.Item>
                  {/* <Menu.Item>
                    <p>{user.email}</p>
                  </Menu.Item> */}
                  <div className="my-1 h-px bg-white/20" />
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-primary text-white" : ""
                        } group flex w-full items-center gap-2 rounded-lg px-3 py-1.5`}
                      >
                        <PencilIcon className="h-4 w-4 text-white/60" />
                        Edit Profile
                      </button>
                    )}
                  </Menu.Item>
                  <div className="my-1 h-px bg-white/20" />
                  <Menu.Item>
                    {() => (
                      // <button
                      //   onClick={handleLogOut}
                      //   className={`${
                      //     active ? "bg-primary text-white" : ""
                      //   } group flex w-full items-center gap-2 rounded-lg px-3 py-1.5`}
                      // >
                      //   <TrashIcon className="h-4 w-4 text-white" />
                      //   Log Out
                      // </button>
                      <LogOut />
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>

              {/* Tooltip */}
              <div className="absolute top-full left-1/2 translate-x-[-50%] mt-2 whitespace-nowrap px-2 py-1 text-sm bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity z-50">
                {user.displayName || "User"}
              </div>
            </div>
          ) : (
            <div className="md:flex items-center space-x-3 hidden">
              <Link to="/signIn" className="btn border border-primary">
                Login
              </Link>
              <Link to="/signUp" className="btn btn-primary md:block">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
