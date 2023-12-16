// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlC8v0X48QTaB9Dmpoj9fA_MYNZWhP_uY",
  authDomain: "chat-app-b9100.firebaseapp.com",
  projectId: "chat-app-b9100",
  storageBucket: "chat-app-b9100.appspot.com",
  messagingSenderId: "876366760123",
  appId: "1:876366760123:web:e68736da243a5f14d4c19e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)