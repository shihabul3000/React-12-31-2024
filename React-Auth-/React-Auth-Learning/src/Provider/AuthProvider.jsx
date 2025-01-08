import { createContext } from "react";
import PropTypes from 'prop-types';

export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {

    const authInfo = { name: 'nodi sagor khal bill'  };

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