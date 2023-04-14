import React from 'react'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import '@/styles/global.css'
import Layout from '@/components/layout'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Benefits from '@/components/benefits'
import { useEffect, useState } from 'react'
import { SelectedPage } from '@/shared/types'
import Gallery from '@/components/gallery'
import SignIn from '@/components/authorization'
import Footer from '@/components/footer'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

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

  // all conditions must be placed after useState and useEffect!
  if (router.basePath === '/') {
    return <Component {...pageProps} />
  }

  return (
    <Layout>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* Home page*/}
      <Hero setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Gallery setSelectedPage={setSelectedPage} />
      <SignIn setSelectedPage={setSelectedPage} />

      <Component {...pageProps} />
      <Footer setSelectedPage={setSelectedPage} />
    </Layout>
  )
}
