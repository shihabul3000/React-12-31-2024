import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children:[
        {

        path:'/',
        element: <Home></Home> ,
    },
        {

        path:'/login',
        element: <Login></Login>,
    },
]
  },
]);

export default Routes;
