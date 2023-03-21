import Link from 'next/link'
import Head from 'next/head'
import Authorization from '@/authorization'

export default function Home() {
  return (
    <>
      <Head>
        {/* Opengraph for telegram preview picture... */}
        <title>Welcome Dualingo</title>
      </Head>
      {/* <div className="d-flex justify-content-center"> */}
      <div className="text-center">
        <h1>Home</h1>
        <div>
          <Link href={'/about'}>About page</Link>
        </div>
        <div>
          <Link href={'/notes'}>Notes</Link>
        </div>
        <div>
          <Link href={'/note/465768'}>Specific Note</Link>
        </div>
      </div>
      {/* </div> */}

      <Authorization />
    </>
  )
}
