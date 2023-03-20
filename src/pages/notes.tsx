import Head from 'next/head'
import { db } from '../firebase-setup'
import { doc, getDoc } from 'firebase/firestore'
import { useState } from 'react'

export default function Notes() {
  const [lessons, setLessons] = useState({})

  async function postNotes() {
    const uid = '2thVPqSvYDgfgvF6oQbAlijjA8X2'
    const docRef = doc(db, 'lessons', uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      setLessons(docSnap.data())
      console.log('Document data:', docSnap.data())
    } else {
      setLessons({ 'Lesson-1': 'Empty' })
      console.log('No such document!')
    }
  }

  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>
      <div className="text-center">
        <h1 className="p-2">Notes</h1>
        <button onClick={postNotes}>Get Notes</button>
        {Object.keys(lessons).length > 0 && <p>{JSON.stringify(lessons)}</p>}
      </div>
    </>
  )
}
