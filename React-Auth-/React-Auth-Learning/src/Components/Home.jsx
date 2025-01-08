import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";


const Home = () => {

    const authInfo = useContext(AuthContex)
    console.log(authInfo);

    return (
     <>
     
     <h1>This is Home For : {authInfo.name} </h1>
     
     
     
     
     </>
    );
};

export default Home;