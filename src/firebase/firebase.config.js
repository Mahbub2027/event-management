// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsarekPlLVJro78aeHBeALrDLtu3BBhXc",
  authDomain: "event-management-d2e91.firebaseapp.com",
  projectId: "event-management-d2e91",
  storageBucket: "event-management-d2e91.appspot.com",
  messagingSenderId: "765060497427",
  appId: "1:765060497427:web:6bd64dff95a966770fffe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;