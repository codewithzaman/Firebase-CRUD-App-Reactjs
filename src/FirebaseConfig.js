// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEUyROZtCT5O2oo-OpwqtM8qn6vcZ_s6s",
  authDomain: "crud-app-21d45.firebaseapp.com",
  projectId: "crud-app-21d45",
  storageBucket: "crud-app-21d45.appspot.com",
  messagingSenderId: "978560747919",
  appId: "1:978560747919:web:d46a53709bbe67e670a3fa"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
