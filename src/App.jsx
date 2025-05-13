import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// Pages & Components
import ChossePath from "./Components/ChoosePath/ChossePath";
import LoginPatient from "./Components/LoginPatient/LoginPatient";
import SignUpPatient from "./Components/SignUpPatient/SignUpPatient";
import AllDoctors from "./Components/AllDoctors/AllDoctors";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import RouterLayout from "./RouterLayout/RouterLayout";
import TasksPage from "./Components/Pages/TaskPage/TaskPage";
import Doctor from "./Components/Doctor/Doctor";
import CommunityPage from "./Components/Pages/CommunityPage/CommunityPage";
import Chat from "./Components/Pages/Chat/Chat";
import Profile from "./Components/Profile/Profile";

// Slick Carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuthContextProvider, { AuthContext } from "./Context/AuthContext";
import AuthGard from "./Components/Guard/AuthGard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useContext } from "react";
import HasDoctor from "./Components/HasDoctor/HasDoctor";

// Router configuration
const queryClient = new QueryClient();

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },

        {
          path: "doctors",
          element: <HasDoctor/>,
        },
        {
          path: "tasks",
          element: (
            <AuthGard>
              <TasksPage />
            </AuthGard>
          ),
        },
        {
          path: "Alldoctors",
          element: (
            <AuthGard>
              <AllDoctors />
            </AuthGard>
          ),
        },
        {
          path: "doctor",
          element: (
            <AuthGard>
              <Doctor />
            </AuthGard>
          ),
        },
        { path: "community", element: <CommunityPage /> },
        { path: "chat", element: <Chat /> },
      ],
    },
    { path: "signupPatient", element: <SignUpPatient /> },
    { path: "loginPatient", element: <LoginPatient /> },
    { path: "choosePath", element: <ChossePath /> },

    {
      path: "profile",
      element: (
        <AuthGard>
          <Profile />
        </AuthGard>
      ),
    },
  ]);

  return (
    <>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthContextProvider>
    </>
  );
}
