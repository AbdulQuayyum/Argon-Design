/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css"
import "./assets/vendor/font-awesome/css/font-awesome.min.css"
import "./assets/scss/design-system-react.scss"

import "./views/pages/Landing.js"
import "./views/pages/Login.js"
import "./views/pages/Profile.js"
import "./views/pages/Register.js"

<BrowserRouter>
  <Routes>
    <Route>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        exact
        render={props => <Landing {...props} />}
      />
      <Route path="/login-page" exact render={props => <Login {...props} />} />
      <Route
        path="/profile-page"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={props => <Register {...props} />}
      />
      <Navigate to="/" />
    </Route>
  </Routes>
</BrowserRouter>
