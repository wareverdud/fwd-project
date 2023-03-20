import { useState } from 'react'
import Link from 'next/link'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth'
import { app } from './firebase-setup'

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
    } catch (e) {
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

  return (
    <>
      <div className="text-center">
        <button onClick={handleAuthorize}>Authorize</button>
        <button onClick={handleRegister}>Sign Up</button>
        <p>{uid}</p>
      </div>
      {/* <form onSubmit={handleSubmit} className="text-center">
        <input type="text" value={email} placeholder="Email" />
        <input type="text" value={password} placeholder="Password" />
        <input type="submit" value="Submit" />
      </form> */}
    </>

    // <>
    //   <form onSubmit={handleSubmit}>
    //     <div className="form-outline mb-4">
    //       <label className="form-label">
    //         Email address
    //         <input
    //           type="email"
    //           id="form2Example1"
    //           className="form-control"
    //           value={email}
    //         />
    //       </label>
    //     </div>

    //     <div className="form-outline mb-4">
    //       <label className="form-label">
    //         Password
    //         <input
    //           type="password"
    //           id="form2Example2"
    //           className="form-control"
    //           value={password}
    //         />
    //       </label>
    //     </div>

    //     <button type="button" className="btn btn-primary btn-block mb-4">
    //       Sign in
    //     </button>

    //     <div className="text-center">
    //       <p>
    //         Not a member? <Link href={'/register'}>Register</Link>
    //       </p>
    //     </div>
    //   </form>
    // </>
  )
}
