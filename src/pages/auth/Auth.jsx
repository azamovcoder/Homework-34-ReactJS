import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function Auth() {
  let islogin = localStorage.getItem("x-auth-token");
  return islogin ? <Outlet /> : <Navigate replace to="/login" />;
}

export default Auth;
