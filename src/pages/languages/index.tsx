import { useRouter } from 'next/router'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { SelectedPage } from '@/shared/types'
import imageCube from '@/assets/Cube.png'
import imageArrow from '@/assets/Arrow.png'
import imageAbstractWaves from '@/assets/AbstractWaves.png'

export default function Languages(props: { user: { uid: any } }) {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Languages
  )

  const router = useRouter()
  function handle(lang: string) {
    router.push(`/languages/${lang}`).then((r) => r)
  }

  return (
    <section
      id="languages"
      className="mx-auto min-h-full w-5/6 py-20" // min-h-full it can expend and fit the content
    >
      <Head>
        <title>Languages</title>
      </Head>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Languages)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="ms-70 sticky left-80 right-0 top-0 text-center text-3xl font-bold underline">
            Languages
          </h1>
          <p className="py-5 text-center text-base font-normal">
            Choose the language you would like to learn:
          </p>
        </motion.div>
        <button
          onClick={() => handle('french')}
          className="m-3 ml-[31vw] rounded-lg bg-red-400 px-11 py-3 text-white hover:bg-secondary-500"
        >
          French
        </button>
        <button
          onClick={() => handle('spanish')}
          className="ml-[1vw] rounded-lg bg-red-400 px-10 py-3 text-white hover:bg-secondary-500"
        >
          Spanish
        </button>
        <button
          onClick={() => handle('german')}
          className="m-3 ml-[31vw] rounded-lg bg-red-400 px-10 py-3 text-white hover:bg-secondary-500"
        >
          German
        </button>
        <button
          onClick={() => handle('russian')}
          className="ml-[1vw] rounded-lg bg-red-400 px-10 py-3 text-white hover:bg-secondary-500"
        >
          Russian
        </button>
        <div className="ml-[45vw] mt-[-12vw] flex">
          <img
            className="mx-auto w-[10vw]"
            src={imageArrow.src}
            alt="Pattern_arrow"
          />
        </div>
        <div className="ml-[-45vw] mt-[-3vw]">
          <img
            className="mx-auto flex w-[12vw] py-10"
            src={imageCube.src}
            alt="Pattern_cube"
          />
        </div>
        <div className="ml-[55vw] mt-[-13vw]">
          <img
            className="mx-auto flex w-[12vw] py-10"
            src={imageAbstractWaves.src}
            alt="Pattern_abstractWaves"
          />
        </div>
      </motion.div>
    </section>
  )
}
