import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '@/firebase/firebase-setup'

export default function Cards() {
  const router = useRouter()
  // const ref = useRef(true)
  // const [user, loading, error] = useAuthState(auth)

  // useEffect(() => {
  //   if (ref.current) {
  //     ref.current = false
  //
  //     const user = auth.currentUser
  //
  //     if (user) {
  //       console.log('ok')
  //     } else {
  //       console.log(user)
  //       router.push('/').then((r) => r)
  //     }
  //   }
  // }, [])
  const [flashcards, setFlashcards] = useState({})

  async function getCards() {
    // const uid = '2thVPqSvYDgfgvF6oQbAlijjA8X2'
    // const uid = 'w09s40Pj3AMYDBaSpW38uW9blNB3'

    // const user = auth.currentUser
    const uid = auth.currentUser?.uid

    if (uid) {
      const docRef = doc(db, `languages/${router.query.id}/flashcards`, uid)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setFlashcards(docSnap.data())
      }
    }
  }

  // async function updateCard() {}

  // async function addCard() {}

  // async function deleteCard() {}

  return (
    <>
      <Head>
        <title>{router.query.id}</title>
      </Head>
      <section
        id="slanguages"
        className="mx-auto min-h-full w-5/6 py-20" // min-h-full it can expend and fit the content
      >
        <div>
          <h1 className="text-3xl font-bold">Cards</h1>
          <button
            // className="m-3 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
            onClick={getCards}
          >
            Get Cards
          </button>
          {Object.keys(flashcards).length > 0 &&
            Object.entries(flashcards).map(([key, value]) => (
              //TODO
              // Just to build, fix later
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              <p key={key.charCodeAt(0) + key.charCodeAt(key.length - 1)}>
                {key} - {value}
              </p>
            ))}
          {Object.keys(flashcards).length == 0 && <p>No cards</p>}
        </div>
      </section>        
    </>
  )
}
