// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_nRvUIuvWUGQXVCy2ByvktqvqHzylAYs",
  authDomain: "ilm-care-bd-a2838.firebaseapp.com",
  projectId: "ilm-care-bd-a2838",
  storageBucket: "ilm-care-bd-a2838.appspot.com",
  messagingSenderId: "303910974029",
  appId: "1:303910974029:web:29310e2fe2361c5c06a204",
  measurementId: "G-61QYZS8FDK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
