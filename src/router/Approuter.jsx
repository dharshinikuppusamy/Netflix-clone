import React from "react";
import {
  ProtectedRoute,
  ProtectedRouteForUnAuthorizedPage,
} from "../router/ProductedRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "../pages/auth/signin/Signin";
import SignUp from "../pages/auth/signup/SignUp";
import Home from "../pages/portal/home/Home";
import Search from "../pages/portal/search/Search";
import Mylist from "../pages/portal/myList/Mylist";
import Landingpage from "../pages/public/Landingpage";

const Approuter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRouteForUnAuthorizedPage>
              <Landingpage />
            </ProtectedRouteForUnAuthorizedPage>
          }
        />
        <Route
          path="/signin"
          element={
            <ProtectedRouteForUnAuthorizedPage>
              <SignIn />
            </ProtectedRouteForUnAuthorizedPage>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRouteForUnAuthorizedPage>
              <SignUp />
            </ProtectedRouteForUnAuthorizedPage>
          }
        />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mylist"
          element={
            <ProtectedRoute>
              <Mylist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          }
        />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
