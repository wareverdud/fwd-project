import { useState } from 'react'
import Link from 'next/link'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth'
import { app } from '../firebase-setup'

export default function Authorization() {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [uid, setUid] = useState('')

  async function handleAuthorize() {
    const email = 'ru.khakimov@innopolis.university'
    const password = 'qwerty'

    const auth = getAuth(app)
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      // console.log(user)
      console.log(user.uid)
      setUid(user.uid)
    } catch (e: any) {
      console.log(e.message, e.code)
    }
  }

  async function handleRegister() {
    const email = 's.pasynkov@innopolis.university'
    const password = '123456'

    const auth = getAuth(app)
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(user)
    } catch (e: any) {
      console.log(e.message, e.code)
    }
  }

  const a = [
    { label: 'Sign In', onClick: handleAuthorize },
    { label: 'Sign Up', onClick: handleRegister },
  ]

  return (
    <>
      <form action="#" className="space-y-15">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your email
            <input
              type="email"
              className="text-center shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="ru.khakimov@innopolis.university"
              required
            ></input>
          </label>
        </div>
        <div>
          {[
            ['Sign In', handleAuthorize, 1],
            ['Sign Up', handleRegister, 2],
          ].map(([label, handler, id]) => (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
              onClick={handler}
              key={id}
            >
              {label}
            </button>
          ))}
          {/* <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
            onClick={handleAuthorize}
          >
            Sign In
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
            onClick={handleRegister}
          >
            Sign Up
          </button> */}
        </div>
        <p>{uid}</p>
      </form>
    </>
  )
}
