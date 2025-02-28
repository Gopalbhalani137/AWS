import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import EventDetail from "../pages/EventDetail";
import Team from "../pages/Team";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:'/event/:id',
    element:<EventDetail/>
  },{
    path:'/team',
    element:<Team/>
  }
]);

export default router;
