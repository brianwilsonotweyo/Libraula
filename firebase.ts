// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyCi-jZ6r33bFeT6M8_MS_3dll4MOo0qfh0",

  authDomain: "libram-8e259.firebaseapp.com",

  projectId: "libram-8e259",

  storageBucket: "libram-8e259.appspot.com",

  messagingSenderId: "293925167559",

  appId: "1:293925167559:web:c801bce6b539606a6db9e2",

  measurementId: "G-YQR71JNW4T"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
