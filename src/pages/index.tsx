import Head from 'next/head'
import React, { useState } from 'react'
import Login from '@/components/signIn'
import SignUp from '@/components/signUp'

export default function Home() {
  const [signIn, setSignIn] = useState(true)

  //TODO
  // event: React.MouseEvent<HTMLInputElement, MouseEvent> shows error during build
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
        <title>Welcome HummiLang</title>
      </Head>
      <h1 className="text-3xl font-bold">Home page</h1>

      {/*Home page logic should be here?*/}
      {/*{signIn ? (*/}
      {/*  <div>*/}
      {/*    <Login />*/}
      {/*  </div>*/}
      {/*) : (*/}
      {/*  <div>*/}
      {/*    <SignUp />*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*<input*/}
      {/*  onClick={(e) => handle(e)}*/}
      {/*  type="button"*/}
      {/*  value="Sign in"*/}
      {/*  className="mx-5 hover:underline"*/}
      {/*/>*/}
      {/*<input*/}
      {/*  onClick={(e) => handle(e)}*/}
      {/*  type="button"*/}
      {/*  value="Sign up"*/}
      {/*  className="mx-5 hover:underline"*/}
      {/*/>*/}
    </>
  )
}
