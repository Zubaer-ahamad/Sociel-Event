import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Home/Details";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import Login from "../Form/Login";
import Register from "../Form/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/services/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch('../social.json')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/service',
        element: <Service></Service>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

export default router;