// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f1684.firebaseapp.com",
  projectId: "mern-estate-f1684",
  storageBucket: "mern-estate-f1684.appspot.com",
  messagingSenderId: "1035682366910",
  appId: "1:1035682366910:web:af042d60dca729f9dd25ef",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
