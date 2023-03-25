import Head from 'next/head'
import { db } from '../firebase-setup'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useRef, useState } from 'react'
import { app } from '../firebase-setup'
import { useRouter } from 'next/router'
import { getAuth } from 'firebase/auth'

interface LessonsState {
  lessonNumber: string
  lessonContent: string
}

export default function Notes() {
  const router = useRouter()
  const ref = useRef(true)

  useEffect(() => {
    if (ref.current) {
      ref.current = false

      const auth = getAuth(app)
      const user = auth.currentUser

      if (user) {
        console.log('not authorized')
      } else {
        console.log(user)
        router.push('/')
      }

      // if (false) {
      //   console.log('non authorized')
      // } else {
      //   router.push('/')
      // }
    }
  }, [])

  const [lessons, setLessons] = useState<LessonsState | string>('')

  async function getNotes() {
    const uid = '2thVPqSvYDgfgvF6oQbAlijjA8X2'
    const docRef = doc(db, 'lessons', uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      setLessons(docSnap.data() as LessonsState)
    } else {
      setLessons('No lessons')
    }
  }

  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>
      <div>
        <h1 className="text-3xl font-bold">Notes</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
          onClick={getNotes}
        >
          Get Notes
        </button>
        {Object.keys(lessons).length > 0 && <p>{JSON.stringify(lessons)}</p>}
      </div>
    </>
  )
}
