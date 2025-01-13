// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Corrected import
// 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaTiP_lVSo9KJbKZyITVLBY5zTOyDxwiw",
  authDomain: "auth-moha-milon-69c25.firebaseapp.com",
  projectId: "auth-moha-milon-69c25",
  storageBucket: "auth-moha-milon-69c25.appspot.com", // Fixed typo in storageBucket URL
  messagingSenderId: "956612404170",
  appId: "1:956612404170:web:89d00dcebc013746fa2533"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);

export default auth;
