
import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const isLoggedIn = sessionStorage.getItem("adminLogin");

  // Login nahi kiya → Login page
  if (isLoggedIn !== "true") {
    return <Navigate to="/admin" replace />;
  }

  // Login kiya hai → Admin page
  return children;
}

export default ProtectedRoute;



