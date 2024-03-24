import {getAuth, signInWithEmailAndPassword} 
from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"; 
import Toasty from "./toast.js";

const auth = getAuth();
console.log (auth);

const signInEmail = document.getElementById("signin-email");
const signInPass = document.getElementById("signin-password");
const signInBtn = document.getElementById("signin-btn");

const toastHTMLElement = document.getElementById("toast");
const toastContent = document.getElementById("toast-content");

signInBtn.addEventListener ("click", (e) => {
    e.preventDefault();
   var emailValueSI = signInEmail.value;
   var passwordValueSI = signInPass.value;
    
   const signInToast = new Toasty(toastHTMLElement, toastContent);
   if(emailValueSI.trim().length == 0  || passwordValueSI.trim().length == 0) 
   {
    signInToast.showAlert("khong duoc bo trong!", 'red');
}
else {
    signInWithEmailAndPassword(auth, emailValueSI, passwordValueSI)
    .then((useCredenntial)=> {
        const user = useCredenntial.user;
        console.log(user);
        async function signin() {
            signInToast.showAlert("dang nhap thanh cong !", 'green');
            await new Promise (resolve => setTimeout(resolve, 1000))
            window.location.href = "index.html";
        }
      signIn()


    
    })
    .catch((error) => {
        const errorcode = error.code;
        const errorMessage = error.message;
        signInToast.showAlert(errorMessage, 'red')

    })
}
})









