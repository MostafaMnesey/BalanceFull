import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// Pages & Components
import ChossePath from "./Components/ChoosePath/ChossePath";
import LoginPatient from "./Components/LoginPatient/LoginPatient";
import SignUpPatient from "./Components/SignUpPatient/SignUpPatient";
import SignUpDoctor from "./Components/SignUpDoctor/SignUpDoctor";
import AllDoctors from "./Components/AllDoctors/AllDoctors";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import RouterLayout from "./RouterLayout/RouterLayout";
import TasksPage from "./Components/Pages/TaskPage/TaskPage";
import Doctor from "./Components/Doctor/Doctor";
import CommunityPage from "./Components/Pages/CommunityPage/CommunityPage";
import Post from "./Components/Pages/CommunityPage/Post/Post";
import Chat from "./Components/Pages/Chat/Chat";
import Profile from "./Components/Profile/Profile";
import DashboardLayout from "./Components/Pages/Dashboard/DashboardLayout";
import HasDoctor from "./Components/HasDoctor/HasDoctor";
import DashChat from "./Components/Pages/Dashboard/SliderContentUi/DashChat/DashChat";
import SettingLayout from "./Components/Pages/Dashboard/SliderContentUi/Setting/SettingLayout";
import DelPops from "./Components/Pages/Dashboard/SliderContentUi/Setting/SettingPopsUp/delPops/delPops";
import ErrPopUp from "./Components/Pages/Dashboard/DashPopsUp/ErrPopUp/ErrPopUp";
import Challanges from "./Components/Challanges/Challanges";

// Context & Guards
import AuthContextProvider from "./Context/AuthContext";
import AuthGard from "./Components/Guard/AuthGard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Slick Carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// React Query client
const queryClient = new QueryClient();

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "doctors", element: <HasDoctor /> },
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
      {
        path: "community",
        element: (
          <AuthGard>
            <CommunityPage />
          </AuthGard>
        ),
      },
      { path: "chat", element: <Chat /> },
      {
        path: "dashboard",
        element: (
          <AuthGard>
            <DashboardLayout />
          </AuthGard>
        ),
      },
      {
        path: "dashboard-chat",
        element: (
          <AuthGard>
            <DashChat />
          </AuthGard>
        ),
      },
      {
        path: "post/:postId",
        element: (
          <AuthGard>
            <Post />
          </AuthGard>
        ),
      },
      {
        path: "setting",
        element: (
          <AuthGard>
            <SettingLayout />
          </AuthGard>
        ),
      },
    ],
  },
  { path: "signupPatient", element: <SignUpPatient /> },
  { path: "signupDoctor", element: <SignUpDoctor /> },
  { path: "loginPatient/:type", element: <LoginPatient /> },
  { path: "choosePath", element: <ChossePath /> },
  { path: "Challenges", element: <Challanges /> },
  {
    path: "profile",
    element: (
      <AuthGard>
        <Profile />
      </AuthGard>
    ),
  },
]);

export default function App() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}
