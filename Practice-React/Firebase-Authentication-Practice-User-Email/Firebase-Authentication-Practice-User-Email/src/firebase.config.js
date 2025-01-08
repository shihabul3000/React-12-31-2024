// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlK0xzaE00HceK9vUkMzK103L1DLclep8",
  authDomain: "practice-firebase-user-email.firebaseapp.com",
  projectId: "practice-firebase-user-email",
  storageBucket: "practice-firebase-user-email.firebasestorage.app",
  messagingSenderId: "120760910213",
  appId: "1:120760910213:web:1e72c5ffc9b806b84704ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;