import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Note() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>
      <h1>Notes {router.query.id}</h1>
    </>
  )
}
