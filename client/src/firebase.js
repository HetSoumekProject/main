// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";



import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlDtIZa20BlLOujbxR6CqLiK0dk-aGi1s",
  authDomain: "het-soumeek.firebaseapp.com",
  projectId: "het-soumeek",
  storageBucket: "het-soumeek.appspot.com",
  messagingSenderId: "295743443984",
  appId: "1:295743443984:web:6a26e714053f75b4aa2695",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();



export { auth, app, googleprovider};
