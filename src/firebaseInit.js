// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKL1jeufiEU2N0FSi_NBa1EerCutZCWUQ",
  authDomain: "codingninja-buybusy-app.firebaseapp.com",
  projectId: "codingninja-buybusy-app",
  storageBucket: "codingninja-buybusy-app.appspot.com",
  messagingSenderId: "773961897007",
  appId: "1:773961897007:web:e089ce41cc9a3a487de2da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize cloud firestore and get the refernce to the service
export const db = getFirestore(app);
