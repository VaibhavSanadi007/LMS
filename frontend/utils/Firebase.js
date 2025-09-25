import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA6O-3UVuRmoSKA_votI-p-rofEyI76LbM",
  authDomain: "loginvirtualcourse-66fd1.firebaseapp.com",
  projectId: "loginvirtualcourse-66fd1",
  storageBucket: "loginvirtualcourse-66fd1.firebasestorage.app",
  messagingSenderId: "470753540739",
  appId: "1:470753540739:web:1a19a79b39336e8ac539b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}