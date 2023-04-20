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

interface Card {
  english: string
  target: string
}

export default function Cards() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.SpecificLanguages
  )

  const router = useRouter()
  const [flashcards, setFlashcards] = useState<Array<Card>>([])

  // render everytime for some reason
  useEffect(() => {
    async function getCards() {
      const uid = auth.currentUser?.uid
      if (uid) {
        const docRef = doc(db, `languages/${router.query.lang}/flashcards`, uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setFlashcards(docSnap.data().card)
        }
      }
    }
    getCards().then((r) => r)
  }, [flashcards, router.query.lang])

  async function addCard() {
    const uid = auth.currentUser?.uid
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
    const uid = auth.currentUser?.uid
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
            onClick={addCard}
          >
            Add Card
          </button>
          <button
            className="mx-2 rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
            onClick={deleteCard}
          >
            Delete Card
          </button>
          {(flashcards === undefined || flashcards.length === 0) && (
            <p>No cards</p>
          )}
          {flashcards !== undefined &&
            flashcards.length !== 0 &&
            flashcards.map((o, idx) => (
              <p key={idx}>
                {o.english}: {o.target}
              </p>
            ))}
        </motion.div>
      </section>
    </>
  )
}
