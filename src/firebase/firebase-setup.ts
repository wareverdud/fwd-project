import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import firebaseConfig from '@/firebase/config'

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore()

export const signUp = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    return true
  } catch (error: any) {
    return { error: error.message }
  }
}

export const signIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    return true
  } catch (error: any) {
    return { error: error.message }
  }
}

export const logOut = async () => {
  try {
    await signOut(auth)
    return true
  } catch (error: any) {
    return { error: error.message }
  }
}
