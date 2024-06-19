import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Authcontext from "../LoginProvider/Loginprovider";
import Home from "../Home/Home";
function Private() {
  const { isLoggedin } = useContext(Authcontext);
  if (!isLoggedin) {
    return <Navigate to="/signin"></Navigate>;
  }
  return <Home />;
}

export default Private;
