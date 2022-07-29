// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyB9p9xyq8BsXq-wN5VTtcKYz-GYqxRrux0",
  authDomain: "testblogspost.firebaseapp.com",
  projectId: "testblogspost",
  storageBucket: "testblogspost.appspot.com",
  messagingSenderId: "87382280715",
  appId: "1:87382280715:web:f5f49aa0ad6a4039ead50e",
  measurementId: "G-2QR9Z2QT5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const storage = getStorage(app)
 export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()