// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6477a.firebaseapp.com",
  projectId: "mern-estate-6477a",
  storageBucket: "mern-estate-6477a.firebasestorage.app",
  messagingSenderId: "13918129184",
  appId: "1:13918129184:web:d68785c4044f497098c045"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
