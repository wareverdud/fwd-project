import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebase-setup'
import { DocumentSnapshot } from '@firebase/firestore'

interface Props {
  uid: string
}

export default function Show({ uid }: Props) {
  const [snap, setSnap] = useState<DocumentSnapshot>()

  useEffect(() => {
    const docRef = doc(db, `users`, uid)
    getDoc(docRef).then((r) => setSnap(r))
  }, [uid])

  return <>{snap?.exists() && snap?.data().username}</>
}
