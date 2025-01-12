import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase.config";
export const AuthContex = createContext(null);

const auth =getAuth(app);




const AuthProvider = ({children}) => {

    const [user , setUser] =useState(null);




    const createUser = (email , password)  => {
        return createUserWithEmailAndPassword(auth , email , password) ;
}



    const authInfo ={
        user,
        createUser
    }
    return (
    <AuthContex.Provider value ={authInfo}>

{children}

    </AuthContex.Provider>
    
    
    );
};

export default AuthProvider;