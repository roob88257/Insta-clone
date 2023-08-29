// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import { toast } from "react-hot-toast";

toast.loading(process.env.API_KEY);
console.log(process.env.API_KEY);
const firebaseConfig = {
  apiKey: "AIzaSyDhHNdvHU9O75PoRiUwQt3idSAXOWx0pRk",
  authDomain: "insta-clone-roob88257.firebaseapp.com",
  projectId: "insta-clone-roob88257",
  storageBucket: "insta-clone-roob88257.appspot.com",
  messagingSenderId: "401699385655",
  appId: "1:401699385655:web:6ad59e84f5ce81b5896ab2",
  measurementId: "G-FEVL8DH0RP"



};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const analytics = getAnalytics(app);
const db=getFirestore();
const auth=getAuth();
const storage=getStorage();


export {
    app,
    db,
    auth,
    storage
}