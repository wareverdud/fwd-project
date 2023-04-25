import { SelectedPage } from '@/shared/types'
import Logo from '@/assets/Logo.png'
import imageTelegram from '@/assets/telegram.png'
import imageGithub from '@/assets/GitHub.png'
import imageInstagram from '@/assets/Instagram.png'
import { motion } from 'framer-motion'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <motion.footer
      onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
      className="bg-primary-100 py-5"
    >
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-11">
          <img src={Logo.src} alt="logo" />
        </div>
        <p className="my-5">
          When learning a language, it is common to feel like progress has
          slowed down and that the process may never end. Laziness, self-doubt,
          and a sense of hopelessness may arise. During these challenging
          moments, HummiLang can be a great resource to remind you that this
          step is temporary and that you are on the right track.
        </p>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Our creators</h4>
          <p className="my-5">Diana Melnikova</p>
          <p className="my-5">Ruslan Khakimov</p>
          <p className="my-5">Nikita Niakhai</p>
          <p className="my-5">Sergey Pasynkov</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact us</h4>
          <a href="https://t.me/meldilen24">
            <img
              className="h-15 m-4 w-11"
              src={imageTelegram.src}
              alt="Telegram"
            />
          </a>
          <p>
            <a href="https://github.com/wareverdud/">
              <img
                className="h-15 m-4 w-11"
                src={imageGithub.src}
                alt="GitHub"
              />
            </a>
          </p>
          <p>
            <a href="https://instagram.com/araneaesolidum?igshid=YmMyMTA2M2Y=">
              <img
                className="h-15 m-4 w-11"
                src={imageInstagram.src}
                alt="Instagram"
              />
            </a>
          </p>
          <p>
            <a href="https://t.me/howtochangealias">
              <img
                className="h-15 m-4 w-11"
                src={imageTelegram.src}
                alt="Telegram"
              />
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
