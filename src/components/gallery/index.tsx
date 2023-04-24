import { SelectedPage, PhotosType } from '@/shared/types'
import Photo from './Photo'
import carouselImage1 from '@/assets/carouselImage1.png'
import carouselImage2 from '@/assets/carouselImage2.png'
import carouselImage3 from '@/assets/carouselImage3.png'
import carouselImage4 from '@/assets/carouselImage4.png'
import carouselImage5 from '@/assets/carouselImage5.png'
import React from 'react'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'

const photos: Array<PhotosType> = [
  {
    name: 'Conversation Circles',
    description:
      'Practice speaking and listening skills in a supportive environment by participating in conversation circles, where learners of all levels engage in discussions on various topics. Native speakers and experienced language learners are invited to facilitate these sessions, offering guidance and corrections when necessary.',
    image: carouselImage1.src,
  },
  {
    name: 'Cultural Evenings',
    description:
      "Immerse yourself in the rich traditions and customs of different countries by attending cultural evenings. These events provide a unique opportunity to learn about the culture behind the languages you're studying.",
    image: carouselImage2.src,
  },
  {
    name: 'Language Challenges',
    description:
      'Participate in regular language challenges to set personal goals, track your progress, and stay motivated. Challenges can include a set number of hours of language practice, vocabulary-building, or completing a language course.',
    image: carouselImage3.src,
  },
  {
    name: 'Guest Lectures',
    description:
      'Attend insightful talks by linguists, authors, and polyglots, who share their experiences, tips, and tricks on language learning, as well as discuss various linguistic topics and cultural insights.',
    image: carouselImage4.src,
  },
  {
    name: 'Language Workshops',
    description:
      'Improve your grammar, vocabulary, and pronunciation through interactive workshops led by experienced tutors. These sessions are tailored to specific proficiency levels and focus on developing core language skills.',
    image: carouselImage5.src,
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Gallery = ({ setSelectedPage }: Props) => {
  return (
    <section id="gallery" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Gallery)}>
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
          <div className="md:w-3/5">
            <HText>OUR ACTIVITIES</HText>
            <p className="py-5">
              Our platform provides a range of exciting activities that cater to
              various learning styles and proficiency levels. Below is a list of
              activities we offer to ensure an engaging and effective learning
              experience for everyone.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[-2800px] whitespace-nowrap">
            {' '}
            {/*this is how overflow performed: child has bigger value then parent*/}
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

export default Gallery
