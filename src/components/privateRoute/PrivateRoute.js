import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { admin } = useSelector((state) => state.admin);

  return admin.uid ? <div>{children}</div> : <Navigate to="/login" />;
}

export default PrivateRoute;
