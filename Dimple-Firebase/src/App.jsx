import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import './App.css';
import app from "./Firebase/firebase.config";
import { useState } from "react";

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then(result => {
        const loggedUser = result.user;
        console.log("User signed in:", loggedUser);
        setUser(loggedUser);
      })
      .catch(error => {
        console.error("Error during sign-in:", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
        setUser(null);
      })
      .catch(error => {
        console.error("Error during sign-out:", error);
      });
  };

  return (
    <>
      <h1>Firebase + React</h1>
      {user ? (
        <div>
          <button onClick={handleSignOut}>Sign Out</button>
          <div className="card">
            <h4>User: {user.displayName}</h4>
            <h3>Email: {user.email}</h3>
          </div>
        </div>
      ) : (
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
      )}
    </>
  );
}

export default App;
