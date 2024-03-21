// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGVIF7LJ15ULm1oCimqJlnEF2hNEuUznU",
  authDomain: "life-saving-blood-donation.firebaseapp.com",
  projectId: "life-saving-blood-donation",
  storageBucket: "life-saving-blood-donation.appspot.com",
  messagingSenderId: "416323611472",
  appId: "1:416323611472:web:2fdd120df4a844df4f1a55",
  measurementId: "G-P6TV2N97GM",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
