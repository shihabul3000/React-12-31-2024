import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News-Pages/News";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children:[
        {

        path:'/',
        element: <Home></Home> ,
        loader: () => fetch('news.json')
    },

    {
path: 'news/:id',
element: <News></News>
    },

        {

        path:'/login',
        element: <Login></Login>,
    },
        {

        path:'/register',
        element: <Register></Register>,
    },
]
  },
]);

export default Routes;
