// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig1 = {
    apiKey: "AIzaSyBeH3UyZgmI7YEJsxrToo57l5kLj05I89s",
    authDomain: "cleanwastedashboard-a0c5d.firebaseapp.com",
    projectId: "cleanwastedashboard-a0c5d",
    storageBucket: "cleanwastedashboard-a0c5d.appspot.com",
    messagingSenderId: "944396535302",
    appId: "1:944396535302:web:5e2e1bb87458954b906587",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig1);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
