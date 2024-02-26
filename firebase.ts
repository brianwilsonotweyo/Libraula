// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyCEDlmu7536VpWW2dykHMJqcJHljn_C2kE",

  authDomain: "libraula-b6f3d.firebaseapp.com",

  projectId: "libraula-b6f3d",

  storageBucket: "libraula-b6f3d.appspot.com",

  messagingSenderId: "699219126744",

  appId: "1:699219126744:web:92192fadf2bb7e2f2aaaad",

  measurementId: "G-HEN6MDZ0SQ"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
