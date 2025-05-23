import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import Loading from "../../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate to={"/signIn"} state={location.pathname}></Navigate>;
};

export default PrivateRoute;
