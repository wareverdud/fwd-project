import Head from 'next/head'
import { motion } from 'framer-motion'
import imageRuslan from '@/assets/Ruslan.png'
import imageDiana from '@/assets/Diana.png'
import imageNikita from '@/assets/Nikita.png'
import imageSergey from '@/assets/Sergey.png'
import { PhotosType } from '@/shared/types'

type Props = {
  name: string
  description?: string
  image: string
}

export default function AboutUs() {
  const photos: Array<PhotosType> = [
    {
      name: 'Ruslan Khakimov',
      description:
        "Our team leader and backend developer. The user doesn't see the server part of the page, but this is what drives the site or application. Ruslan isn't only a developer and a professional in his field, but also a good manager. He helps the team and manages the development process.",
      image: imageRuslan.src,
    },
    {
      name: 'Nikita Niakhai',
      description:
        'Our frontend developer. Nikita designed the layout of the design so that it would be convenient for the user, so you, to interact with the page.',
      image: imageNikita.src,
    },
    {
      name: 'Diana Melnikova',
      description:
        'Our frontend developer and UI/UX designer. Diana set the design and direction for the whole project, so UI/UX experts are no less important than developers. Nevertheless, everything you see on this site is the work of our interface developers.',
      image: imageDiana.src,
    },
    {
      name: 'Sergey Pasynkov',
      description:
        'Our frontend developer and UI/UX designer. Sergey was in charge of designing the website and diligently worked on enhancing its structure for optimal functionality. He also conducted rigorous testing to ensure that everything was working seamlessly, thus playing a crucial role in the success of the website.',
      image: imageSergey.src,
    },
  ]

  const Photo = ({ name, image, description }: Props) => {
    return (
      <li className="relative mx-8 w-[20%]">
        <img src={image} alt={`${image}`} className="rounded-full" />
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
        <meta
          key="description"
          name="description"
          content="We welcome you to familiarize yourself with creators of HummiLang"
        />
        <meta property="og:title" content="About us" />
        <meta
          property="og:description"
          content="We welcome you to familiarize yourself with creators of HummiLang"
        />
      </Head>
      <motion.div>
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
            We possess the capability to transform even the most eccentric idea
            into an operational and marketable project. It is evident that
            having a competent and skilled team accounts for 50% of the
            project&apos;s accomplishment. We welcome you to familiarize
            yourself with our team!
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
