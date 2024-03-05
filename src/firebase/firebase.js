import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCYRgPHZuXVPa5qXdGiZ38sv_r1i1fPoVc",
  authDomain: "meesho-clone-a4cb6.firebaseapp.com",
  projectId: "meesho-clone-a4cb6",
  storageBucket: "meesho-clone-a4cb6.appspot.com",
  messagingSenderId: "281463001854",
  appId: "1:281463001854:web:2028bf6519eb1cc6de8baf"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};



