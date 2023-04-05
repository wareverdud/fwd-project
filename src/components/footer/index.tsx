import { SelectedPage } from '@/shared/types';
import Logo from "@/assets/Logo.png"
import telegram from "@/assets/telegram.png"
import github from "@/assets/GitHub.png"
import instagram from "@/assets/Instagram.png"
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({setSelectedPage}: Props) => {
  return (
    <motion.footer 
        onViewportEnter={()=> setSelectedPage(SelectedPage.Contact)}
        className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-11'>
                <img src={Logo.src} alt="logo" />
            </div>
            <p className='my-5'>
                It happens that while learning a language, hands drop and it seems that this process is endless. 
                There comes laziness, self-doubt and a feeling that nothing will work out. 
                At these moments, HummiLang comes to the rescue, which will remind you that this step is 
                interim, and you are on the right path.
            </p>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Our creators</h4>
                <p className='my-5'>Diana Melnikova</p>
                <p className='my-5'>Ruslan Khakimov</p>
                <p className='my-5'>Nikita Nikhay</p>
                <p className='my-5'>Sergey Pasynkov</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact us</h4>
                <a href = "https://t.me/meldilen24"><img className="m-4 w-11 h-15" src={telegram.src} alt="Telegram"/></a>
                <p><a href = "https://github.com/wareverdud/fwd-project"><img className="m-4 w-11 h-15" src={github.src} alt="GitHub"/></a></p>
                <p><a href = "https://instagram.com/araneaesolidum?igshid=YmMyMTA2M2Y="><img className="m-4 w-11 h-15" src={instagram.src} alt="Instagram"/></a></p>
                <p><a href = "https://t.me/howtochangealias"><img className="m-4 w-11 h-15" src={telegram.src} alt="Telegram"/></a></p>
            </div>
        </div>
    </motion.footer>
  )
}

export default Footer