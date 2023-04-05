import { useState } from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth'
import { app } from '../../firebase-setup'
import router from 'next/router'

interface Props {
  signIn: boolean
}

export default function Authorization({ signIn }: Props) {
  const [email, setEmail] = useState('ru.khakimov@innopolis.university')
  const [password, setPassword] = useState('qwerty')

  async function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  async function handleChangePassword(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setPassword(event.target.value)
  }

  async function handleSignIn(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const auth = getAuth(app)
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      router.push('/notes')
    } catch (e: any) {
      alert('No such user')
      // console.log(e.message, e.code)
    }
  }

  async function handleSignUp(event: React.SyntheticEvent<HTMLFormElement>) {
    

    event.preventDefault()
    const auth = getAuth(app)
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      router.push('/notes')
    } catch (e: any) {
      alert('Such user exists')
      // console.log(e.message, e.code)
    }
  }

  const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white text-white`;

  return (
      <form onSubmit={signIn ? handleSignIn : handleSignUp}>
        <div className="m-3">
          <input 
            type="text"
            value={email}
            onChange={handleChangeEmail}
            className={inputStyles}
            placeholder="Email"
          />
        </div>
        <div className="m-3">
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
            className={inputStyles}
            placeholder="Password"
          />
        </div>
        <input
          type="submit"
          value={signIn ? 'Sign in' : 'Sign up'}
          className="bg-secondary-500 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded m-3"
        />
      </form>
  )
}