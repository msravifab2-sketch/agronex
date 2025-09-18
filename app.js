// Firebase config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcSK394fDwwbdbBkh46g_g7aEJKIts1pE",
  authDomain: "agronex-6d4a4.firebaseapp.com",
  databaseURL: "https://agronex-6d4a4-default-rtdb.firebaseio.com",
  projectId: "agronex-6d4a4",
  storageBucket: "agronex-6d4a4.firebasestorage.app",
  messagingSenderId: "473974696770",
  appId: "1:473974696770:web:e0cd6afdf1d483165936db",
  measurementId: "G-5SDH561ZM9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login
document.getElementById("loginBtn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "welcome.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Signup
document.getElementById("signupBtn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Account created successfully!");
      window.location.href = "welcome.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Google Login
document.getElementById("googleBtn").addEventListener("click", function () {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => {
      window.location.href = "welcome.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
