import { useState } from 'react'
import { CardType } from '@/pages/languages/[lang]/[id]'

interface CardProps {
  card: CardType | undefined
  language: string
}

export default function Card({ card, language }: CardProps) {
  const [front, setFront] = useState(true)
  function talk(text: string | undefined) {
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = front ? 'en' : language
      speechSynthesis.speak(utterance)
    }
  }

  return (
    <>
      <div onClick={() => setFront(!front)}>
        {front && card && <h1>{card.english}</h1>}
        {!front && card && <h1>{card.target}</h1>}
      </div>
      <div className="m-5">
        <button onClick={() => talk(front ? card?.english : card?.target)}>
          Voice
        </button>
      </div>
    </>
  )
}
