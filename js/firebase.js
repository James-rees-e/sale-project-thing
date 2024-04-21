import {
    getFirestore,
  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  
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
  export const db = getFirestore(app);
  export const auth = getAuth(app);