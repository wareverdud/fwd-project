import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore'
import { auth, db } from '@/firebase/firebase-setup'
import { motion } from 'framer-motion'
import { SelectedPage } from '@/shared/types'
import Card from '@/components/card'

export interface CardType {
  english: string
  target: string
}

export default function Container() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.SpecificLanguages
  )
  const [flashcards, setFlashcards] = useState<Array<CardType>>([])
  const [cardNum, setCardNum] = useState(0)
  const router = useRouter()

  // render everytime for some reason
  // useEffect(() => {
  //   async function getCards() {
  //     const uid = router.query.id as string
  //     // const uid = auth.currentUser?.uid
  //     if (uid) {
  //       const docRef = doc(db, `languages/${router.query.lang}/flashcards`, uid)
  //       const docSnap = await getDoc(docRef)
  //       if (docSnap.exists()) {
  //         setFlashcards(docSnap.data().card)
  //       }
  //     }
  //   }
  //   getCards().then((r) => r)
  // }, [flashcards, router.query.lang])

  async function getCards() {
    const uid = router.query.id as string
    // const uid = auth.currentUser?.uid
    if (uid) {
      const docRef = doc(db, `languages/${router.query.lang}/flashcards`, uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setFlashcards(docSnap.data().card)
        console.log(docSnap.data().card)
      }
    }
  }

  async function addCard() {
    const uid = router.query.id as string
    if (uid) {
      for (const o of [{ english: 'hello', target: 'bonjour' }]) {
        await updateDoc(
          doc(db, `languages/${router.query.lang}/flashcards`, uid),
          { card: arrayUnion(o) }
        )
      }
    }
  }

  async function deleteCard() {
    const uid = router.query.id as string
    if (uid) {
      for (const o of [{ english: 'hello', target: 'bonjour' }]) {
        await updateDoc(
          doc(db, `languages/${router.query.lang}/flashcards`, uid),
          { card: arrayRemove(o) }
        )
      }
    }
  }

  return (
    <>
      <Head>
        <title>{router.query.id}</title>
      </Head>
      <section
        id="slanguages"
        className="mx-auto min-h-full w-5/6 py-20" // min-h-full it can expend and fit the content
      >
        <motion.div
          onViewportEnter={() =>
            setSelectedPage(SelectedPage.SpecificLanguages)
          }
        >
          <h1 className="text-3xl font-bold">Cards</h1>
          <button
            className="mx-2 rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
            onClick={getCards}
          >
            Get
          </button>
          <Card
            card={flashcards[cardNum]}
            language={router.query.lang?.slice(0, 2) as string}
          />
          <button
            className="m-2 rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
            onClick={() => {
              if (cardNum + 1 < flashcards.length) setCardNum(cardNum + 1)
            }}
          >
            Next
          </button>
          <button
            className="mx-2 rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
            onClick={() => {
              if (cardNum - 1 >= 0) setCardNum(cardNum - 1)
            }}
          >
            Prev
          </button>
        </motion.div>
      </section>
    </>
  )
}
