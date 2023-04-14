import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Languages(props: { user: { uid: any } }) {
  const router = useRouter()
  function handle(lang: string) {
    router.push(`/languages/${lang}`).then((r) => r)
  }

  const buttonStyles =
    'rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'

  return (
    <>
      <Head>
        <title>Languages</title>
      </Head>
      <h1 className="text-3xl font-bold">Languages</h1>
      <div className="m-3">
        <button onClick={() => handle('french')} className={buttonStyles}>
          French
        </button>
      </div>
      <div className="m-3">
        <button onClick={() => handle('german')} className={buttonStyles}>
          German
        </button>
      </div>
      <div className="m-3">
        <button onClick={() => handle('russian')} className={buttonStyles}>
          Russian
        </button>
      </div>
      <div className="m-3">
        <button onClick={() => handle('spanish')} className={buttonStyles}>
          Spanish
        </button>
      </div>
    </>
  )
}
