import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs,addDoc,onSnapshot } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

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
const db = getFirestore(app)




let table = document.getElementById("table")

const gettable = ()=>{
        // const q = query(collection(db, "users"), where("uid", "!=", uid));
        const path = collection(db,"Teachers")
        const unsubscribe = onSnapshot(path, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            table.innerHTML += `
            <th>${doc.data().selectcourse}</th>
              <td>${doc.data().selectteacher}</td>
              <td>${doc.data().selectbatch}</td>
              <td>${doc.data().selecttimings}</td>      
            `
          });
        });
}


window.onload =  gettable