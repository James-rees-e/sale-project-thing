<<<<<<< HEAD
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









=======
import {
    getAuth,
    signInWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import Toasty from "./toast.js";

const auth = getAuth();



const SignInEmail = document.getElementById("signin-email");
const SignInPass = document.getElementById("signin-password");
const SignInBtn = document.getElementById("signin-btn");
const toastHTMLElement = document.getElementById("toast");
const toastContent = document.getElementById("toast-content");


SignInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var emailValueSI = SignInEmail.value;
    var passValueSI = SignInPass.value;

    const signInToast = new Toasty(toastHTMLElement, toastContent);
    if (emailValueSI.trim().length == 0 || passValueSI.trim().length == 0) {
        signInToast.showAlert("it's empty", 'red');
    }
    else {
        signInWithEmailAndPassword(auth, emailValueSI, passValueSI)
            .then((useCredential) => {
                const user = useCredential.user;
                console.log(user)
                async function signIn(){
                signInToast.showAlert("dang nhap thanh cong", 'green');
                    await new Promise(resolve => setTimeout(resolve, 1000))
                    window.location.href = "index.html";
                }
                signIn()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }
})
>>>>>>> bbeaf0e8f23b6a684b1ef199bb3ec72b136c59a3
