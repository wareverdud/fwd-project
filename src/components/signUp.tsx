import { auth, db, signUp } from '@/firebase/firebase-setup'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { doc, setDoc } from 'firebase/firestore'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setEmail('')
    setPassword('')
    const res = await signUp(email, password)
    if (typeof res !== 'boolean' && res?.error) {
      setError(res.error.toString().slice(10))
    } else {
      const uid = auth.currentUser?.uid
      if (uid) {
        for (const lang of ['french', 'german', 'russian', 'spanish']) {
          await setDoc(doc(db, `languages/${lang}/flashcards`, uid), {
            card: [],
          })
        }
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
