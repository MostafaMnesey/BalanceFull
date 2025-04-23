
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RouterLayout from "./RouterLayout/RouterLayout";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const route = createHashRouter([
  {
    path: '', element: <RouterLayout />, children: [
    {index: true, element: <LandingPage/>},
  ]},
])
function App() {

  return <>
    <RouterProvider router={route} />
  </>
}

export default App;
