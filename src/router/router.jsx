import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import EventDetail from "../pages/EventDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:'/event',
    element:<EventDetail/>
  }
]);

export default router;
