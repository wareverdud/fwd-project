import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
  icon: JSX.Element
  title: string
  description: string
}

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100
        px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <Link
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        href={'/AboutUs'}
      >
        <p>Read more</p>
      </Link>
    </motion.div>
  )
}

export default Benefit
