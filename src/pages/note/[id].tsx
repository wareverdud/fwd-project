import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { app } from '../../firebase-setup'
import { getAuth } from 'firebase/auth'

export default function Note() {
  const router = useRouter()
  const ref = useRef(true)

  useEffect(() => {
    if (ref.current) {
      ref.current = false

      const auth = getAuth(app)
      const user = auth.currentUser

      if (user) {
        console.log('not authorized')
      } else {
        console.log(user)
        router.push('/')
      }

      // if (false) {
      //   console.log('non authorized')
      // } else {
      //   router.push('/')
      // }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>
      <h1 className="text-3xl font-bold">Notes</h1>
      <p>{router.query.id}</p>
    </>
  )
}
