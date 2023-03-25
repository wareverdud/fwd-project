import Head from 'next/head'
import Authorization from '@/components/authorization'
import { useState } from 'react'

export default function Home() {
  const [signIn, setSignIn] = useState(true)

  function handle(event: any) {
    if (event.target.value === 'Sign in') {
      setSignIn(true)
    } else {
      setSignIn(false)
    }
  }

  return (
    <>
      <Head>
        {/* Opengraph for telegram preview picture... */}
        <title>Welcome Dualingo</title>
      </Head>
      <h1 className="text-3xl font-bold">Home page</h1>

      <div>
        <Authorization signIn={signIn} />
      </div>
      <input
        onClick={handle}
        type="button"
        value="Sign in"
        className="hover:underline mx-5"
      />
      <input
        onClick={handle}
        type="button"
        value="Sign up"
        className="hover:underline mx-5"
      />
    </>
  )
}
