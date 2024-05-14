// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_066ColEL7B31Qp-8OzRBLG9vep2jP8E",
  authDomain: "expense-tracker-fb103.firebaseapp.com",
  projectId: "expense-tracker-fb103",
  storageBucket: "expense-tracker-fb103.appspot.com",
  messagingSenderId: "901930169358",
  appId: "1:901930169358:web:806411ff7b8f6d69c3f85f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);