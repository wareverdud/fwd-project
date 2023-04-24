import HText from '@/shared/HText'
import { BenefitType, SelectedPage } from '@/shared/types'
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
import { motion } from 'framer-motion'
import Benefit from './Benefit'
import ActionButton from '@/shared/ActionButton'

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'Big library of knowledge',
    description: '',
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: 'Big & Reliable community',
    description: '',
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Teachers and Proffessors  form over the World',
    description: '',
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20" // min-h-full it can expend and fit the content
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A PLATFORM</HText>
          <p className="my-5 text-sm">
            {
              "Our platform's diverse activities aim to create a supportive and engaging environment for users to learn and practice foreign languages. By participating in these activities, you'll not only improve your language skills but also make lasting connections with fellow language enthusiasts."
            }
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="items-center justify-between gap-8 md:mt-5 md:flex"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHIC AND DESCRIPT */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="w-100 mx-auto"
            src={BenefitsPageGraphic.src}
            alt="benefit-page-graphic"
          />

          {/* DESCRIPT */}
          <div>
            {/* TITTLE */}
            <div className="relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="before:absolute before:-left-20 before:-top-20
                            before:z-[1] before:content-abstractwaves"
              >
                <div className="relative">
                  <HText>A THOUSAND NEW WORDS PER MONTH</HText>
                </div>
              </motion.div>
            </div>
            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="mb-5">
                Knowledge of one language allows you to enter the hall of life,
                knowledge of two languages opens all the doors in this hall to
                you.
              </p>
              <p className="mb-5">
                Become a part of our platform and learn new languages with ease.
                Help others, share your experience, complete tasks of varying
                complexity and check your progress at any time convenient for
                you!
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div
                className="before:absolute before:-bottom-20 before:right-40 
                           before:z-[-1] before:content-sparkles"
              >
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits
