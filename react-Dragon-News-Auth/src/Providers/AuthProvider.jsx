import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase.config";

export const AuthContex = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth , email , password);
  }

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("User in the auth state changed:", currentUser);
      setUser(currentUser);
    });

    // Properly return the unsubscribe function
    return unSubscribe;
  }, []);

  const authInfo = {
    user,
    createUser,
    logOut,
    signIn,
  };

  return (
    <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>
  );
};

export default AuthProvider;
