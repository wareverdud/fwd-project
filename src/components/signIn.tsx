import { useState } from 'react'
import { signIn } from '@/firebase/firebase-setup'
import { useRouter } from 'next/router'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setEmail('')
    setPassword('')
    const res = await signIn(email, password)
    if (typeof res !== 'boolean' && res?.error) {
      setError(res.error.toString().slice(10))
    } else {
      await router.replace('/languages')
    }
  }

  const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white text-white`

  return (
    <>
      <h2>Login</h2>
      {error ? <div>{error}</div> : null}
      <form onSubmit={handleSubmit}>
        <div className="m-3">
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Your Email"
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
            onChange={(e) => setPassword(e.target.value)}
            className={inputStyles}
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="m-3 rounded bg-secondary-500 px-4 py-2 font-bold text-white hover:bg-primary-500"
        />
      </form>
    </>
  )
}

export default Login
