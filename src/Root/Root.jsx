import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer/Footer";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../components/Loading/Loading";

const Root = () => {
  const { loading } = useContext(AuthContext);

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="lg:container mx-auto">
      <Navbar />
      <div className="min-h-screen mt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
