// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAutOuEV7LM54xgScqdwtcbq4VxRrjUQKE",
    authDomain: "user-email-password-auth-3a0f0.firebaseapp.com",
    projectId: "user-email-password-auth-3a0f0",
    storageBucket: "user-email-password-auth-3a0f0.appspot.com", // Corrected
    messagingSenderId: "821552628693",
    appId: "1:821552628693:web:1cedf7c8771ec1f6f4735c",
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;