import { useRouter } from 'next/router'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { SelectedPage } from '@/shared/types'

export default function Languages(props: { user: { uid: any } }) {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Languages
  )

  const router = useRouter()
  function handle(lang: string) {
    router.push(`/languages/${lang}`).then((r) => r)
  }

  const buttonStyles =
    'rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'

  return (
    <section
      id="languages"
      className="mx-auto min-h-full w-5/6 py-20" // min-h-full it can expend and fit the content
    >
      <Head>
        <title>Languages</title>
      </Head>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Languages)}
      >
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
      </motion.div>
    </section>
  )
}
