import React, { useContext } from "react";
import { AuthContext } from "../Context/FirebaseAuthContext";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <div className="flex justify-center items-center h-screen">
        <span className="loading loading-infinity text-cyan-900 loading-xl "></span>
    </div>;
  }


  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }


  return children;
};

export default PrivetRoute;
