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
      <span className="text-center">
        <h1 className="p-2">Home</h1>
        <div className="p-2 align-items-center">
          <Link href={'/about'}>About page</Link>
        </div>
        <div className="p-2">
          <Link href={'/notes'}>Notes</Link>
        </div>
        <div className="p-2">
          <Link href={'/note/465768'}>Specific Note</Link>
        </div>

        <button type="button" className="text-center btn btn-dark m-2">
          Press me
        </button>
      </span>
      {/* </div> */}

      <Authorization />
    </>
  )
}
