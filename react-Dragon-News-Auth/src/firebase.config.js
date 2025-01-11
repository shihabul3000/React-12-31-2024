// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDnJ7TFfXGxQ2Dc57_xwYh4p9qiYWgKcY",
  authDomain: "react-dragon-news-auth-d0403.firebaseapp.com",
  projectId: "react-dragon-news-auth-d0403",
  storageBucket: "react-dragon-news-auth-d0403.firebasestorage.app",
  messagingSenderId: "652739524827",
  appId: "1:652739524827:web:1a973714bb760ed43bb4fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;