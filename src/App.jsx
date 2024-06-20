import { Route, Routes } from "react-router-dom";

import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import React from "react";
import Single from "./pages/single/Single";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="/single/:id" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
