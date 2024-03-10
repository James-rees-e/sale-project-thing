import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
const signUpEmail = document.getElementById("signup-email");
const signUpUsername = document.getElementById("signup-username");
const signUpPass = document.getElementById("signup-password");
const signUpConfirmPassword = document.getElementById("signup-confirm");
const signUpBtn = document.getElementById("signup-btn");

const auth = getAuth();
signUpBtn.addEventListener("click", (e) => {
    e.preventDefault(); var emailValueSU = signUpEmail.value;
    var passwordValueSU = signUpPass.value;
    let vietThuong = /[a-z]/g;
    let vietHoa = /[A-Z]/g;
    let chuSo = /[0-9]/g;


    if (
        signUpUsername.value.trim().length == 0 ||
        signUpEmail.value.trim().length == 0 ||
        signUpPass.value.trim().length == 0 ||
        signUpConfirmPassword.value.trim().length == 0
    ) {
        alert("Something still empty :(");
    } else if (signUpPass.value.trim().length < 8) {
        alert("Password must be at least 8 characters :(");
    } else if (!signUpPass.value.trim().match(vietThuong)) {
        alert("Password must have at least 1 lowercase character :(")
    } else if (!signUpPass.value.trim().match(vietHoa)) {
        alert("Password must have at least 1 uppercase character :(")
    } else if (!signUpPass.value.trim().match(chuSo)) {
        alert("Password must have at least 1 alphanumeric character :(")
    } else if (signUpPass.value.trim() != signUpConfirmPassword.value.trim()) {
        alert("Password isn't match :(")
    } else {
        createUserWithEmailAndPassword(auth, emailValueSU, passwordValueSU)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                window.location.href = "index.html";
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
            });
    }
});

