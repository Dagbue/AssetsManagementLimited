import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyDpHmsjylz7KBn3xfds55WdWKXnSu9uWLA",
    authDomain: "assets-management-limited.firebaseapp.com",
    projectId: "assets-management-limited",
    storageBucket: "assets-management-limited.appspot.com",
    messagingSenderId: "469250328889",
    appId: "1:469250328889:web:dfd6f2053f80058addc0e8"
};


// init firebase
initializeApp(firebaseConfig)





//init firebase auth
const auth = getAuth();

const database = getDatabase();

const db = getFirestore();

const storage = getStorage();



export { auth, db, database, storage}

