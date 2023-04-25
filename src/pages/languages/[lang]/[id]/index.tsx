import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebase-setup'
import { motion } from 'framer-motion'
import Card from '@/components/card'
import { CardType } from '@/shared/types'

export default function Container() {
  const router = useRouter()
  const ref = useRef(true)
  const [words, setWords] = useState<Array<CardType>>([])
  const [cardNum, setCardNum] = useState(0)
  const [front, setFront] = useState(true)

  useEffect(() => {
    async function getCards() {
      const uid = router.query.id as string
      if (uid) {
        const docRef = doc(db, `languages/${router.query.lang}/flashcards`, uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setWords(docSnap.data().card)
        }
      }
    }
    if (ref.current) {
      ref.current = false
      getCards().then((r) => r)
    }
  }, [words, router.query.id, router.query.lang])

  function talk(text: string | undefined) {
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text)
      let language = ''
      if (router.query.lang === 'french') language = 'fr'
      if (router.query.lang === 'german') language = 'de'
      if (router.query.lang === 'russian') language = 'ru'
      if (router.query.lang === 'spanish') language = 'es'
      utterance.lang = front ? 'en' : language
      speechSynthesis.speak(utterance)
    }
  }

  return (
    <>
      <Head>
        <title>{router.query.id}</title>
      </Head>
      <section id="slanguages" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div>
          <h1 className="text-3xl font-bold">Cards</h1>
          <div className="m-2 p-2" onClick={() => setFront(!front)}>
            <Card
              isEmpty={words.length === 0}
              card={words[cardNum]}
              front={front}
              language={router.query.lang as string}
            />
          </div>
          {words.length !== 0 && (
            <>
              <button
                className="m-2 rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
                onClick={() => {
                  if (cardNum + 1 < words.length) {
                    setCardNum(cardNum + 1)
                  }
                  if (cardNum + 1 === words.length) {
                    setCardNum(0)
                  }
                  setFront(true)
                }}
              >
                Next
              </button>
              <button
                className="mx-2 rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
                onClick={() => {
                  if (cardNum - 1 >= 0) {
                    setCardNum(cardNum - 1)
                  }
                  if (cardNum - 1 === -1) {
                    setCardNum(words.length - 1)
                  }
                  setFront(true)
                }}
              >
                Prev
              </button>
              <button
                className="m-2 rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
                onClick={() =>
                  talk(front ? words[cardNum].english : words[cardNum].target)
                }
              >
                Voice
              </button>
            </>
          )}
          <button
            className="mx-2 rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
            onClick={() =>
              router.push(
                `/languages/${router.query.lang}/${router.query.id}/modify`
              )
            }
          >
            Modify
          </button>
        </motion.div>
      </section>
    </>
  )
}
