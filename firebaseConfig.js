// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmll165OhvMsFBjiXxFJ4xuDvT1dMdEKU",
  authDomain: "zaziauto-b1aee.firebaseapp.com",
  databaseURL: "https://zaziauto-b1aee-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zaziauto-b1aee",
  storageBucket: "zaziauto-b1aee.appspot.com",
  messagingSenderId: "1002158482839",
  appId: "1:1002158482839:web:c9ce771e1d2ae782c910d2",
  measurementId: "G-17JVH477XY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);