import Head from 'next/head'
import { useRouter } from 'next/router'
import { lazy, Suspense, useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/firebase-setup'
import { motion } from 'framer-motion'
import { Data } from '@/shared/types'
const Show = lazy(() => import('@/components/show'))

export default function Cards() {
  const router = useRouter()
  const [cards, setCards] = useState<Array<Data>>([])

  useEffect(() => {
    async function getCards() {
      const querySnapshot = await getDocs(
        collection(db, `languages/${router.query.lang}/flashcards`)
      )
      const res: Data[] = []
      querySnapshot.forEach((doc) => {
        res.push({ id: doc.id, data: doc.data().card })
      })
      setCards(res)
    }
    getCards().then((r) => r)
  }, [router.query.lang])

  return (
    <>
      <Head>
        <title>
          {router.query.lang &&
            (router.query.lang as string).charAt(0).toUpperCase() +
              (router.query.lang as string).slice(1)}
        </title>
      </Head>
      <section id="slanguages" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div>
          <h1 className="text-3xl font-bold">Cards</h1>
          {cards.map((x) => {
            return (
              <div className="my-2" key={x.id}>
                <button
                  className="mx-2 rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
                  onClick={() =>
                    router.push(`/languages/${router.query.lang}/${x.id}`)
                  }
                >
                  <Suspense fallback={<div>Loading...</div>}>
                    <Show uid={x.id} />
                  </Suspense>
                </button>
              </div>
            )
          })}
        </motion.div>
      </section>
    </>
  )
}
