import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider} from "react-router-dom";
import "./index.css";
import Routes from "./Components/routes/Routes";
import AuthProvider from "./Providers/AuthProvider";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={Routes} />
   </AuthProvider>
  </React.StrictMode>
);
