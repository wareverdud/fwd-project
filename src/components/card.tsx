import { CardProps } from '@/shared/types'

export default function Card({ isEmpty, card, front, language }: CardProps) {
  return (
    <>
      {isEmpty && <p>No words</p>}
      {front && card && <h1>English: {card.english}</h1>}
      {!front && card && (
        <h1>
          {language.charAt(0).toUpperCase() + language.slice(1)}: {card.target}
        </h1>
      )}
    </>
  )
}
