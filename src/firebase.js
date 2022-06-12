// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import firebase from "firebase";
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMePCW1lXVktJJXSJMUrYIJaNANEMBlyE",
  authDomain: "personal-website-contact-46e3d.firebaseapp.com",
  projectId: "personal-website-contact-46e3d",
  storageBucket: "personal-website-contact-46e3d.appspot.com",
  messagingSenderId: "899064869489",
  appId: "1:899064869489:web:ee0e14fdac46f0411761d0",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

var db = app.firestore();

export { db };
