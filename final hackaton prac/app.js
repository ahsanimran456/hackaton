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



let loginEmail = document.getElementById("loginEmail")
let loginpassword = document.getElementById("loginpassword")
let emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let loginBtn = document.getElementById("loginBtn")
let errors = document.getElementById("error")


if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        signInWithEmailAndPassword(auth, loginEmail.value, loginpassword.value)
            .then(async (userCredential) => {
                let spinner = document.getElementById("loader");    
                spinner.style.display="block"
                const user = userCredential.user;
                window.location.replace('./dashboard/dashboard.html')   
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (loginEmail.value.trim() ==="") {

                    errors.innerHTML = "Empty Email feild";
                }
                else if (!emailRegx.test(loginEmail.value)) {

                    errors.innerHTML = "Invalid Email";
                }
                else if (loginpassword.value.trim() === "") {

                    errors.innerHTML = "Empty Password feild";
                }
                else if (loginpassword.value.length < 6) {

                    errors.innerHTML = "Password Should be at least 6";
                }
                else {
                    setTimeout(()=>{
                    errors.innerHTML = errorMessage;
                        },2000)
                    console.log(errorMessage)
                }
            });
    })

}


window.onload = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        window.location.replace("./dashboard/dashboard.html")
      }
    });
  };

