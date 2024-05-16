// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Agrega esta línea


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "~~~~~~~~~~~~~~~~~~",
  authDomain: "~~~~~~~~~~~~~~~~~~",
  projectId: "~~~~~~~~~~~~~~~~~~",
  storageBucket: "~~~~~~~~~~~~~~~~~~",
  messagingSenderId: "~~~~~~~~~~~~~~~~~~",
  appId: "~~~~~~~~~~~~~~~~~~"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
<<<<<<< HEAD
export const Auth = getAuth(app); // Agrega esta línea
=======
>>>>>>> a2f14b83f9c5a104c7812e8b178530097cd8ff47
