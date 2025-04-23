import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import ChossePath from "./Components/ChoosePath/ChossePath";
import LoginPatient from "./Components/LoginPatient/LoginPatient";
import SignUpPatient from "./Components/SignUpPatient/SignUpPatient";
import AllDoctors from "./Components/AllDoctors/AllDoctors";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import RouterLayout from "./RouterLayout/RouterLayout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "choose", element: <ChossePath /> },
      { path: "loginPatient", element: <LoginPatient /> },
      { path: "signupPatient", element: <SignUpPatient /> },
      { path: "doctors", element: <AllDoctors /> },
    ],
  },
]);

export default function App() {
  return<>
  
  <RouterProvider router={router} />;
  </>}  
