import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/HomePage/Home/Home";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
// import ServicesDetails from "../pages/HomePage/Services/ServicesDetails";
import ServicesCategory from "../pages/HomePage/Services/ServicesCategory";
import PrivateRoute from "./PrivateRoute";
import Events from "../pages/Events/Events";
import Blog from "../pages/Blog/Blog";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/servicesDetails/:id',
          element: <PrivateRoute><ServicesCategory></ServicesCategory></PrivateRoute>,
          loader: ()=> fetch('/event.json')
        },
        {
          path: '/upcomingEvents',
          element: <Events></Events>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
  ]);

export default router;