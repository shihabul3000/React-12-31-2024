import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home/Home";


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

        path:'/',
        element: '',
    },
]
  },
]);

export default Routes;
