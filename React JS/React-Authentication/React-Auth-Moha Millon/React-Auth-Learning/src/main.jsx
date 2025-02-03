import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Components/Root";
import Home from "./Components/Home";
import Login from "./Components/Login";

import AuthProvider from "./Provider/AuthProvider";
import Register from "./Components/Register";
import Orders from "./Components/Orders";
import PrivateRoute from "./Routes/PrivateRoute";
import Profile from "./Components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
   {
    path: "/",
    element: <Home></Home>,
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
     path:'/orders',
     element:<PrivateRoute><Orders></Orders></PrivateRoute>
   },
   {
     path:'/profile',
     element:<PrivateRoute><Profile></Profile></PrivateRoute>
   },
   


    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
);