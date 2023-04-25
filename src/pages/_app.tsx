import React from 'react'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import '@/styles/global.css'
import Layout from '@/components/layout'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (router.basePath === '/') {
    return <Component {...pageProps} />
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
