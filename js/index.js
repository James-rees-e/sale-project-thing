  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAU-eFMR5sjEg59ihLzOaYRDe5NaK63M0c",
    authDomain: "khietandquocanh.firebaseapp.com",
    projectId: "khietandquocanh",
    storageBucket: "khietandquocanh.appspot.com",
    messagingSenderId: "567631880617",
    appId: "1:567631880617:web:526185c0adc4cd31bd24b8",
    measurementId: "G-HBGV65D0L1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  console.log(app);