import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// Pages & Components
import ChossePath from "./Components/ChoosePath/ChossePath";
import LoginPatient from "./Components/LoginPatient/LoginPatient";
import SignUpPatient from "./Components/SignUpPatient/SignUpPatient";
import AllDoctors from "./Components/AllDoctors/AllDoctors";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import RouterLayout from "./RouterLayout/RouterLayout";

// Slick Carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TasksPage from "./Components/Pages/TaskPage/TaskPage";
import Doctor from "./Components/Doctor/Doctor";
import CommunityPage from "./Components/Pages/CommunityPage/CommunityPage";
import Chat from "./Components/Pages/Chat/Chat";

// Router configuration
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
      { path: "tasks", element: <TasksPage /> },
      { path: "community", element: <CommunityPage /> },
      { path: "chat", element: <Chat /> },
    ],
  },
  {
    path: "doctor",
    element: <Doctor />,
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
