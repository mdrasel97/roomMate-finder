import React from "react";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  // const {user} = useContext()

  if (user && user.email) {
    return children;
  }
  return <Navigate to={"/signIn"}></Navigate>;
};

export default PrivateRoute;
