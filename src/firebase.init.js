// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMt84kEULYS7GlFohoFoKmB5OOMejqR4c",
  authDomain: "assignment-11-796ba.firebaseapp.com",
  projectId: "assignment-11-796ba",
  storageBucket: "assignment-11-796ba.appspot.com",
  messagingSenderId: "295026222784",
  appId: "1:295026222784:web:447b6f4222ada206dcef25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;