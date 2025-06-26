// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdB3gEE01xK7ol9ikRWTYMFzKkBkKbXPI",
  authDomain: "job-tracker-e4aa1.firebaseapp.com",
  projectId: "job-tracker-e4aa1",
  storageBucket: "job-tracker-e4aa1.firebasestorage.app",
  messagingSenderId: "322851371750",
  appId: "1:322851371750:web:3bdaa36cb0b217b1e1d927",
  measurementId: "G-P236N90DL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  db = getFirestore(app) ;
export const auth = getAuth(app)
const storage =getStorage(app);
export {storage}