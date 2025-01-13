import { useContext } from "react";
import  { AuthContex } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContex);

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if(user){
        return children;
    }

    return  <Navigate to ='/login'></Navigate>
       
      
};

export default PrivateRoute;

PrivateRoute.propTypes = { 
    children: PropTypes.node
};