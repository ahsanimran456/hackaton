import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs,addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


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

let selectteacher = document.getElementById("selectteacher")
let selectcourse = document.getElementById("selectcourse")
let selecttimings = document.getElementById("selecttimings")
let selectbatch = document.getElementById("selectbatch")


const senddatateachers = async()=>{
    await addDoc(collection(db, "Teachers"), {
        selectteacher:selectteacher.value,
        selectcourse:selectcourse.value,
        selecttimings:selecttimings.value,
        selectbatch:selectbatch.value,
      })
      ;
     selectteacher.value =""
    selectcourse.value =""
    selecttimings.value=""
    selectbatch.value=""
      alert("gya")
    }
window.senddatateachers= senddatateachers
