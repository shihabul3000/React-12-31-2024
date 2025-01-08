// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaTiP_lVSo9KJbKZyITVLBY5zTOyDxwiw",
  authDomain: "auth-moha-milon-69c25.firebaseapp.com",
  projectId: "auth-moha-milon-69c25",
  storageBucket: "auth-moha-milon-69c25.firebasestorage.app",
  messagingSenderId: "956612404170",
  appId: "1:956612404170:web:89d00dcebc013746fa2533"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;