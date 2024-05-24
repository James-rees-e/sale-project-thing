import {
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
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
    signInToast.showAlert("it's empty", "red");
  } else {
    signInWithEmailAndPassword(auth, emailValueSI, passValueSI)
      .then((useCredential) => {
        const user = useCredential.user;

        async function signIn() {
          signInToast.showAlert("Login successfully", "green");
          await new Promise((resolve) => setTimeout(resolve, 1000));
          localStorage.setItem("currentUser", user.email);
          window.location.href = "./index.html";
        }
        signIn();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
});
