import { useContext } from "react";
import { AuthContex } from "../../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user , loading} =useContext(AuthContex);

    const location = useLocation();
    console.log (location);

    if (loading){
        return <div>
            <span className="loading loading-ball loading-xs"></span>
<span className="loading loading-ball loading-sm"></span>
<span className="loading loading-ball loading-md"></span>
<span className="loading loading-ball loading-lg"></span>
        </div>
    }

    if (user){
        return children;
    }





      return <Navigate to='/login'></Navigate>

};

export default PrivateRoute;