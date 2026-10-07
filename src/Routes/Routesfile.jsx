

import React from "react";
import Navbar from "../components/Navbar";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Loginsignup from "../pages/Loginsignup";
import ProtectedRoute from "../pages/ProtectedRoute";

import Cart from "../pages/Cart";
import Shop from "../pages/Shops";
import Itemman from "../Item/Itemman";
import Itemwommen from "../Item/Itemwommen";
import Kids from "../Item/kids";

import Admin from "../admin/Admin";

const Routesfile = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Shop />} />

        <Route
          path="/mens"
          element={<Itemman catogrie="mens" />}
        />

        <Route
          path="/womens"
          element={<Itemwommen catogrie="womens" />}
        />

        <Route
          path="/kids"
          element={<Kids catogrie="kids" />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* LOGIN PAGE */}
        <Route
          path="/admin"
          element={<Loginsignup />}
        />

        {/* PROTECTED ADMIN PAGE */}
        <Route
          path="/admin-panel"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
};

export default Routesfile;

