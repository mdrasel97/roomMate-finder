import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const LogOut = () => {
  const { singOutUser } = useContext(AuthContext);
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
  return (
    <div>
      <button
        onClick={handleLogOut}
        className="block px-4 py-2 rounded transition hover:bg-primary hover:text-white w-full text-left"
      >
        LogOut
      </button>
    </div>
  );
};

export default LogOut;
