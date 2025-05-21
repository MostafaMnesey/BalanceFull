import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// Pages & Components
import ChoosePath from "./Components/ChoosePath/ChoosePath";
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
import Challenges from "./Components/Challanges/Challanges";
import ShowChallenge from "./Components/Challanges/ShowChallange/ShowChallange";
import Patient from "./Components/Pages/Dashboard/SliderContentUi/Patient/Patient";
import PatientProf from "./Components/Pages/Dashboard/SliderContentUi/Patient/PatientProf/PatientProf";

// Context & Guards
import AuthContextProvider from "./Context/AuthContext";
import AuthGuard from "./Components/Guard/AuthGard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Slick Carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TaskPopUp from "./Components/Pages/Dashboard/SliderContentUi/Patient/PatientPopUp/TaskPopUp";
import FeedbackPopUp from "./Components/Pages/Dashboard/SliderContentUi/Patient/PatientPopUp/FeedbackPopUp";
import TaskTypePop from "./Components/Pages/Dashboard/SliderContentUi/Patient/PatientPopUp/taskTypePop";
import DelPatient from "./Components/Pages/Dashboard/SliderContentUi/Patient/PatientPopUp/DelPatient";

// React Query client
const queryClient = new QueryClient();

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
          <AuthGuard>
            <TasksPage />
          </AuthGuard>
        ),
      },
      {
        path: "alldoctors",
        element: (
          <AuthGuard>
            <AllDoctors />
          </AuthGuard>
        ),
      },
      {
        path: "doctor",
        element: (
          <AuthGuard>
            <Doctor />
          </AuthGuard>
        ),
      },
      {
        path: "community",
        element: (
          <AuthGuard>
            <CommunityPage />
          </AuthGuard>
        ),
      },
      { path: "chat", element: <Chat /> },
      {
        path: "dashboard",
        element: (
          <AuthGuard>
            <DashboardLayout />
          </AuthGuard>
        ),
      },
      {
        path: "dashboard-chat",
        element: (
          <AuthGuard>
            <DashChat />
          </AuthGuard>
        ),
      },
      {
        path: "post/:postId",
        element: (
          <AuthGuard>
            <Post />
          </AuthGuard>
        ),
      },
      {
        path: "challenges/:challengeId",
        element: (
          <AuthGuard>
            <ShowChallenge />
          </AuthGuard>
        ),
      },
      {
        path: "setting",
        element: (
          <AuthGuard>
            <SettingLayout />
          </AuthGuard>
        ),
      },
      {
        path: "patient-account",
        element: (
          <AuthGuard>
            <Patient />
          </AuthGuard>
        ),
      },
      
      {
        path: "challenges",
        element: (
          <AuthGuard>
            <Challenges />
          </AuthGuard>
        ),
      },
    ],
  },
  { path: "signupPatient", element: <SignUpPatient /> },
  { path: "signupDoctor", element: <SignUpDoctor /> },
  { path: "loginPatient/:type", element: <LoginPatient /> },
  { path: "choosePath", element: <ChoosePath /> },
  {
    path: "profile",
    element: (
      <AuthGuard>
        <Profile />
      </AuthGuard>
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
