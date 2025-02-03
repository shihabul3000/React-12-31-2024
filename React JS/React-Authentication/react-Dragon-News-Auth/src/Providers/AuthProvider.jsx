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
  const [loading , setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading (true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth , email , password);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("User in the auth state changed:", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    // Properly return the unsubscribe function
    return unSubscribe;
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logOut,
    signIn,
  };

  return (
    <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>
  );
};

export default AuthProvider;
