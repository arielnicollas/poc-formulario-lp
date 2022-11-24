import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDhoqDdlcdLBRk28GGCanwpoJ-hpJpaWHI",
    authDomain: "project-caption.firebaseapp.com",
    projectId: "project-caption",
    databaseURL: "project-caption",
    storageBucket: "project-caption.appspot.com",
    messagingSenderId: "411959288078",
    appId: "1:411959288078:web:bae08b2b5319da5288375f",
  };
  
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)


export default db

