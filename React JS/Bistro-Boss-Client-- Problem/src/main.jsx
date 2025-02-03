import * as React from "react";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import { router } from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <div className="max-w-screen-xl mx-auto">

   <RouterProvider router={router} />


   </div>
  </React.StrictMode>
);
