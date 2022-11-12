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



let select = document.getElementById("selectCourse")
let studentname = document.getElementById("name")
let fathername = document.getElementById("father")
let studentemail = document.getElementById("email")
let studentphone = document.getElementById("phone")
let dateofbirth = document.getElementById("dob")
let selectteacher = document.getElementById("selectteacher")
let selecttimings = document.getElementById("selecttimings")
let cnic= document.getElementById("cnic")
let error = document.getElementById("error")

const sendstudentDAta = async()=>{if(studentname.value != "" && fathername.value != "" && studentemail.value !="" && studentphone.value != " "){
    
    await addDoc(collection(db, "Students"), {
        studentname:studentname.value,
        fathername:fathername.value,
        studentemail:studentemail.value,
        studentphone:studentphone.value,
        selecttimings:selecttimings.value,
        dateofbirth:dateofbirth.value,
        selectteacher:selectteacher.value,
        rollnumber:Math.ceil(Math.random()*1000),
        select:select.value,
        cnic:cnic.value,
      })
      studentname.value=""
      fathername.value = ""
      studentemail.value = ""
      studentphone.value = ""
      dateofbirth.value = ""
      selectteacher.value = ""
      selecttimings.value = ""
      cnic.value = ""
      select.value = ""
      ;
      Swal.fire({
  
        title: "Student login successfully",
        text: "Student added in Database",
        iconColor: 'green',
        confirmButtonColor: "red",
        background: '#363636',
        color: 'whitesmoke',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },  
      })
    }
      else{console.log(alert("nahi gya"))}
      console.log(select.value,studentemail,studentname)
    }

window.sendstudentDAta= sendstudentDAta
