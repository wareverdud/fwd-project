import { SelectedPage } from '@/shared/types';
import Logo from "@/assets/Logo.png"
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
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo.src} alt="logo" />
            </div>
            <p className='my-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Suscipit officia quos laboriosam obcaecati dignissimos repellendus, eum 
                facere natus tempora aliquid voluptates distinctio numquam. 
                Temporibus totam, est sed ea ut eligendi!
            </p>
            <p> Copyright tag Duolingo Right Reserved.</p>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Mass nrtat fdsfds</p>
                <p className='my-5'>Ufhsidof89dsbF SJF </p>
                <p className='my-5'>IOF89fbSNAOFJ JS8ASF </p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact us</h4>
                <p className='my-5'>Mass nrtat fdsfds</p>
                <p >+7 (917) 229 81 31</p>
            </div>
        </div>
    </motion.footer>
  )
}

export default Footer