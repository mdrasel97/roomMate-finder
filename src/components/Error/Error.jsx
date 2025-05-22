import React from "react";
import { Link } from "react-router";
import errorImg from "../../assets/errorpage.png";

const Error = () => {
  return (
    <div className="md:min-h-screen mt-10 flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <img className="w-60" src={errorImg} alt="" />
      {/* <h1 className="text-6xl font-bold mb-4">404</h1> */}
      <p className="text-2xl mb-2">Page Not Found</p>
      <p className="mb-6">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-primary text-white rounded hover:bg-secondary transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
