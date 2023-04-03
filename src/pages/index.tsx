import Head from 'next/head'
import Authorization from '@/components/authorization/authorization'
import { useState } from 'react'

export default function Home() {
  return (
    <>
      <Head>
        {/* Opengraph for telegram preview picture... */}
        <title>Welcome Dualingo</title>
      </Head>
      <h1 className="text-3xl font-bold">Home page</h1>

    </>
  )
}
