import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyC5KpXje0OK2IhmfdP2oqOB2VDpLSLefdg",
    authDomain: "hackaton-prac.firebaseapp.com",
    projectId: "hackaton-prac",
    storageBucket: "hackaton-prac.appspot.com",
    messagingSenderId: "954137165580",
    appId: "1:954137165580:web:d855e489e26dd29ac35329",
    measurementId: "G-5D1VCJFRP0"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);



window.onload = async () => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.replace("../index.html")
      }
    });
  };