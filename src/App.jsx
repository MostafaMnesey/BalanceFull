import { useState } from "react";

import "./App.css";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import ChossePath from "./Components/ChoosePath/ChossePath";

import LoginPatient from "./Components/LoginPatient/LoginPatient";
import SignUpPatient from "./Components/SignUpPatient/SignUpPatient";
import AllDoctors from "./Components/AllDoctors/AllDoctors";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ChossePath />,
    },
    {
      path: "/loginPatient",
      element: <LoginPatient/>,
    },
    {
      path: "/SignupPatient",
      element: <SignUpPatient />,
    },
    {
      path: "/Doctors",
      element: <AllDoctors />,
    }

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
