import { auth, db, signUp } from '@/firebase/firebase-setup'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  async function checkUsername() {
    const querySnapshot = await getDocs(collection(db, `users`))
    const res: string[] = []
    querySnapshot.forEach((doc) => {
      res.push(doc.data().username)
    })
    return res.includes(username)
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (await checkUsername()) {
      setError('Username is already in use')
      return
    }
    const res = await signUp(email, password)
    if (typeof res !== 'boolean' && res?.error) {
      setError(res.error.toString().slice(10))
      setUsername('')
      setEmail('')
      setPassword('')
    } else {
      const uid = auth.currentUser?.uid
      if (uid) {
        for (const lang of ['french', 'german', 'russian', 'spanish']) {
          await setDoc(doc(db, `languages/${lang}/flashcards`, uid), {
            card: [],
          })
        }
        await setDoc(doc(db, 'users', uid), {
          username: username,
          email: email,
          password: password,
        })
      }
      await router.push('/languages')
    }
  }

  const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white text-white`

  return (
    <>
      <h2>Sign Up</h2>
      <div>
        {error ? <div>{error}</div> : null}
        <form onSubmit={handleSubmit}>
          <div className="m-3">
            <input
              type="text"
              value={username}
              placeholder="Your Username"
              required
              onChange={(e) => setUsername(e.target.value)}
              className={inputStyles}
            />
          </div>
          <div className="m-3">
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className={inputStyles}
            />
          </div>
          <div className="m-3">
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Your Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className={inputStyles}
            />
          </div>
          <button
            type="submit"
            className="m-3 rounded bg-secondary-500 px-4 py-2 font-bold text-white hover:bg-primary-500"
          >
            Register
          </button>
        </form>
      </div>
    </>
  )
}

export default SignUp
