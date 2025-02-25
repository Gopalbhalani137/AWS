import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import EventDetail from "../pages/EventDetail";
import Teams from "../pages/Teams";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/event',
    element: <EventDetail />
  },
  {
    path: '/teams',
    element: <Teams />
  }
]);

export default router;
