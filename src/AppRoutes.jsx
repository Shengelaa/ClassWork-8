import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import AboutUs from "./Components/AboutUs";
import Impact from "./Components/Impact";
import Locations from "./Components/Locations";
import Projects from "./Components/Locations";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<App />} />

      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path='/Projects' element={<Projects />} />
      <Route path='/Impact' element={<Impact />} />
      <Route path='/Locations' element={<Locations />} />
      <Route path='/SignIn' element={<SignIn />} />
      <Route path='/SignUp' element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
