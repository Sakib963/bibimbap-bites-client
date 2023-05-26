import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home/Home";
import Blog from "../pages/blog/Blog";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import App from "../App";
import Recipes from "../pages/recipe/Recipes/Recipes";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://bibimbap-bites-server.vercel.app/korean/chefs"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <Recipes></Recipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://bibimbap-bites-server.vercel.app/korean/chefs/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
