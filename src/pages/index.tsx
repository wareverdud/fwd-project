import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Hero from '@/components/hero'
import Benefits from '@/components/benefits'
import Gallery from '@/components/gallery'
import SignIn from '@/components/authorization'
import { SelectedPage } from '@/shared/types'

export default function Home() {
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
        <meta
          key="description"
          name="description"
          content="Our platform's diverse activities aim to create a supportive and engaging environment for users to learn and practice foreign languages."
        />
        <meta property="og:title" content="Welcome HummiLang" />
        <meta
          property="og:description"
          content="Our platform's diverse activities aim to create a supportive and engaging environment for users to learn and practice foreign languages."
        />
      </Head>

      {/* Home(ГЛАВНАЯ) page*/}
      <Hero setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Gallery setSelectedPage={setSelectedPage} />
      <SignIn setSelectedPage={setSelectedPage} />
    </>
  )
}
