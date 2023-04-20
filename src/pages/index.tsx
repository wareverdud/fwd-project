import Head from 'next/head'
import React, { Component, useEffect, useState } from 'react'
import Login from '@/components/signIn'
import SignUp from '@/components/signUp'
import Hero from '@/components/hero'
import Benefits from '@/components/benefits'
import Gallery from '@/components/gallery'
import SignIn from '@/components/authorization'
import { SelectedPage } from '@/shared/types'

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

  // <> from location of _app.tsx, where homepage componenents where placed

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      } else {
        setIsTopOfPage(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // </> from location of _app.tsx, where homepage componenents where placed

  return (
    <>
      <Head>
        {/* Opengraph for telegram preview picture... */}
        <title>Welcome HummiLang</title>
      </Head>

      {/* Home(ГЛАВНАЯ) page*/}
      <Hero setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Gallery setSelectedPage={setSelectedPage} />
      <SignIn setSelectedPage={setSelectedPage} />

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
