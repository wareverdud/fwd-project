import { useRouter } from 'next/router'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useState } from 'react'
import image1 from '@/assets/Ruslan.png'
import image2 from '@/assets/Diana.png'
import image3 from '@/assets/Nikita.png'
import image4 from '@/assets/Sergey.png'
import { SelectedPage, PhotosType } from '@/shared/types'
type Props = {
  name: string
  description?: string
  image: string
}

export default function AboutUs(props: { user: { uid: any } }) {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Languages
  )

  const router = useRouter()
  function handle(lang: string) {
    router.push(`/AboutUs/`).then((r) => r)
  }

  const photos: Array<PhotosType> = [
    {
      name: 'Ruslan Khakimov',
      description:
        "Our team leader and backend developer. The user doesn't see the server part of the page, but this is what drives the site or application. Ruslan isn't only a developer and a professional in his field, but also a good manager. He helps the team and manages the development process.",
      image: image1.src,
    },
    {
      name: 'Nikita Niakhai',
      description:
        'Our frontend developer. Nikita designed the layout of the design so that it would be convenient for the user, so you, to interact with the page.',
      image: image3.src,
    },
    {
      name: 'Diana Melnikova',
      description:
        'Our frontend developer and UI/UX designer. Diana set the design and direction for the whole project, so UI/UX experts are no less important than developers. Nevertheless, everything you see on this site is the work of our interface developers.',
      image: image2.src,
    },
    {
      name: 'Sergey Pasynkov',
      description:
        'QA engineer. Sergey checks the work of the site and looks for all kinds of errors and vulnerabilities in it.',
      image: image4.src,
    },
  ]

  const Photo = ({ name, image, description }: Props) => {
    return (
      <li className="relative mx-8 w-[20%]">
        <img alt={`${image}`} src={image} className="rounded-full" />
        <p className="mt-2 text-center text-2xl">{name}</p>
        <p className="mt-1 text-center">{description}</p>
      </li>
    )
  }

  return (
    <section
      id="AboutUs"
      className="mx-auto min-h-full w-5/6 py-20" // min-h-full it can expend and fit the content
    >
      <Head>
        <title>About us</title>
      </Head>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}>
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
            OUR CREATORS
          </h1>
          <p className="py-5 text-center text-base font-normal">
            Our team is able to turn even the craziest idea into a functional
            and competitive project. A good staff is often 50% of the success of
            the entire project. Get to know us!
          </p>
        </motion.div>
        <div className="mt-10 w-full overflow-x-auto overflow-y-hidden">
          <ul className="flex items-baseline justify-center text-center align-middle">
            {photos.map((item: PhotosType, index) => (
              <Photo
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
