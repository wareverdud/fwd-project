import Head from 'next/head'
import { useRouter } from 'next/router'
import { lazy, Suspense, useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/firebase-setup'
import { motion } from 'framer-motion'
import { Data } from '@/shared/types'
const Show = lazy(() => import('@/components/show'))
import imageCube from '@/assets/Cube.png'
import imageArrow from '@/assets/Arrow.png'
import imageAbstractWaves from '@/assets/AbstractWaves.png'

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
          <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="ms-70 sticky left-80 right-0 top-0 text-center text-3xl font-bold underline">
              Our users
            </h1>
            <p className="py-5 text-center text-base font-normal">
              Select the user whose cards you would like to study:
            </p>
          </motion.div>
          {cards.map((x) => {
            return (
              <div className="my-2" key={x.id}>
                <button
                  className="m-1 ml-[34vw] h-[3vw] w-[15vw] rounded-lg bg-red-400 px-11 py-3 text-center text-white hover:bg-secondary-500"
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
          <div className="ml-[45vw] mt-[-14vw] flex">
            <img
              className="mx-auto w-[10vw]"
              src={imageArrow.src}
              alt="Pattern_arrow"
            />
          </div>
          <div className="ml-[-45vw] mt-[-3vw]">
            <img
              className="mx-auto flex w-[12vw] py-10"
              src={imageCube.src}
              alt="Pattern_cube"
            />
          </div>
          <div className="ml-[55vw] mt-[-13vw]">
            <img
              className="mx-auto flex w-[8vw] py-10"
              src={imageAbstractWaves.src}
              alt="Pattern_abstractWaves"
            />
          </div>
        </motion.div>
      </section>
    </>
  )
}
