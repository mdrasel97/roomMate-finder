import React, { useState } from "react";

import logoImage from "../../assets/logo.png";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* Overlay (for background blur when menu is open) */}
      {isDrawerOpen && (
        <div
          onClick={() => setIsDrawerOpen(false)}
          className="fixed inset-0 bg-opacity-50 z-30 lg:hidden"
        ></div>
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-16 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform z-40 transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="p-4 space-y-4">
          <h2 className="text-xl font-bold text-primary">Menu</h2>
          <ul className="space-y-3 font-medium">
            <li>
              <a href="#" className="block hover:text-violet-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-violet-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-violet-600">
                Listings
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-violet-600">
                Contact
              </a>
            </li>
          </ul>
          <div className="mt-4 space-y-2">
            <button className="btn btn-sm w-full">Sign in</button>
            <button className="btn btn-sm btn-primary w-full">Sign up</button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="p-4 bg-white dark:bg-gray-900 dark:text-white shadow-md relative z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          {/* <a href="#" className="flex items-center gap-2 text-xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className="w-8 h-8 text-violet-600"
            >
              <path d="M27.912 7.289l-10.324-5.961..." />
              <path d="M22.094 19.451h-0.758c-0.188..." />
            </svg>
            RoomMate
          </a> */}

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

          {/* Desktop Nav */}
          <ul className="hidden lg:flex space-x-6 font-medium">
            <li>
              <a href="#" className="hover:text-violet-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-600">
                Listings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-600">
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-3">
            <button className="btn btn-sm">Sign in</button>
            <button className="btn btn-sm btn-primary">Sign up</button>
          </div>

          {/* Hamburger for Mobile */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsDrawerOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800 dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
