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




// let name = document.getElementById("name")
// let fathername = document.getElementById("fathername")
// let email = document.getElementById("email")
// let phone = document.getElementById("phone")
// let roll = document.getElementById("roll")


// const gettable = ()=>{
//         // const q = query(collection(db, "users"), where("uid", "!=", uid));
//         const path = collection(db,"Students")
//         const unsubscribe = onSnapshot(path, (querySnapshot) => {
//           querySnapshot.forEach((doc) => {
//             name.innerHTML += `
//                 <h3>${doc.data().studentname}</h3>  
//             `
//             fathername.innerHTML+=`
//             <h3>${doc.data().fathername}</h3>  
//             `
//             roll.innerHTML+=`
//             <h3>${doc.data().rollnumber}</h3>  

//             `
//             email.innerHTML +=`
//             <h3>${doc.data().studentphone}</h3>  
//             `
//             phone.innerHTML += `
//             <h3>${doc.data().studentemail}</h3>  
            
//             `
//           });
//         });
// }


// window.onload =  gettable


let contain = document.getElementById("contain")
window.onload = async() => {
    const querySnapshot = await getDocs(collection(db, "Students"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        let div = `
        <div class="card">
                <div class="img">
                    <img src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1668262795~exp=1668263395~hmac=865617d225fe7d6915f3243e238414806bcf4930d3b031c6257203c58ffb796d" alt="">
                </div>
                <div class="data">
                    <div class="text">
                        <div class="text_name" id="name">Name</div>
                        <div class="text_data">${doc.data().studentname}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Father Name</div>
                        <div class="text_data">${doc.data().fathername}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Contact</div>
                        <div class="text_data">${doc.data().studentphone}</div>
                    </div>
                    
                    <div class="text">
                        <div class="text_name">Course Name</div>
                        <div class="text_data">${doc.data().select}</div>
                    </div>
                    <div class="text">
                        <div class="text_name">Status</div>
                        <div class="text_data">✔</div>
                    </div>
                </div>
            </div>
        `
        contain.innerHTML += div
    });

}