import { useState } from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth'
import { app } from '../firebase-setup'
import router from 'next/router'

export default function Authorization() {
  const [email, setEmail] = useState('ru.khakimov@innopolis.university')
  const [password, setPassword] = useState('qwerty')
  const [uid, setUid] = useState('')

  async function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  async function handleChangePassword(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setPassword(event.target.value)
  }

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const auth = getAuth(app)
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      console.log(user.uid)
      setUid(user.uid)
      router.push('/notes')
    } catch (e: any) {
      console.log(e.message, e.code)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="m-3">
          <input
            type="text"
            value={email}
            onChange={handleChangeEmail}
            className="text-black"
            placeholder="Email"
          />
        </div>
        <div className="m-3">
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
            className="text-black"
            placeholder="Password"
          />
        </div>
        <input
          type="submit"
          value="Отправить"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
        />
      </form>
    </>
  )
}
