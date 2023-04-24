import { SelectedPage } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ActionButton from '@/shared/ActionButton'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import { motion } from 'framer-motion'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Hero = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10">
      {/*image and main header*/}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)} // when we scroll page down it changes color of current menu in navbar
        className="mx-auto flex h-5/6 w-5/6 items-center justify-center"
      >
        {/*main header*/}
        <div className="z-10 mt-32 basis-3/5">
          {/*headings*/}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText.src} />
              </div>
            </div>

            <p className="mt-5 text-xl md:text-start">
              Because ordering pizza in Italian is a life skill too.
            </p>
          </motion.div>

          {/*Actions*/}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Sign In
            </ActionButton>
          </motion.div>
        </div>

        {/*image*/}
        <div
          className="flex basis-3/5 justify-center 
      md:z-10 md:mt-16 md:justify-items-end"
        >
          <img alt="home-page-graphic" src={HomePageGraphic.src} />
        </div>
      </motion.div>

      {/*Separation*/}
      <div className="h-[150px] w-full bg-primary-100 py-10"></div>
    </section>
  )
}

export default Hero
