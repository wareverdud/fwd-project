import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// import * as dotenv from 'dotenv'
// dotenv.config()

const firebaseConfig = {
  apiKey: 'AIzaSyA5r1E5-bdGvouAy3LwVtBWDYJlIzqpSrY',
  authDomain: 'fwd-project-4bcda.firebaseapp.com',
  projectId: 'fwd-project-4bcda',
  storageBucket: 'fwd-project-4bcda.appspot.com',
  messagingSenderId: '547799342077',
  appId: '1:547799342077:web:6f73545c7fd9c5c8b7d794',
}

// console.log(process.env)

// const firebaseConfig = {
//   apiKey: process.env
// }

const app = initializeApp(firebaseConfig)
// const auth = getAuth(app)
const db = getFirestore()

export { app, db }
