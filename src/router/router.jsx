import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import EventDetail from "../pages/EventDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:'/event/:id',
    element:<EventDetail/>
  }
]);

export default router;
