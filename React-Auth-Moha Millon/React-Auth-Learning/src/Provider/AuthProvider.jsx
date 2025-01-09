
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { createContext , useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase.config";

export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {

    const [user ] = useState(null);

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const singInUser = (email , password) => {

        return signInWithEmailAndPassword (auth , email , password)
    }



    const authInfo = { user , createUser , singInUser  }

    return (
        <>

            <AuthContex.Provider value={authInfo}>
                {children}
            </AuthContex.Provider>
        </>
    );
};

AuthProvider.propTypes = { // Corrected to lowercase `propTypes`
    children: PropTypes.node
};

export default AuthProvider;



/*

1. Create Contex and export it
2. set peovider with value
3. use the Auth Provider in the main.jsx file
4. access childern in the AuthProvider component as children and use it in the middele of the Provider


*/ 