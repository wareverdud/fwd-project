import { SelectedPage } from '@/shared/types'
import AnchorLink from "react-anchor-link-smooth-scroll";
import ActionButton from '@/shared/ActionButton'
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import {motion} from "framer-motion"

type Props = {
  setSelectedPage:(value: SelectedPage) => void;
}

const Hero = ({setSelectedPage}: Props) => {

  return (
    <section
    id="home"
    className='gap-16 bg-gray-20 py-10'
    >
   {/*image and main header*/}
    <motion.div 
     onViewportEnter={()=> setSelectedPage(SelectedPage.Home)} // when we scroll page down it changes color of current menu in navbar
     className='flex mx-auto w-5/6 items-center justify-center h-5/6'
    >
      {/*main header*/}
      <div className='z-10 mt-32 basis-3/5'>
        {/*headings*/}
        <motion.div
          className='md:-mt-20' 
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden:{opacity:0,x:-75},
            visible:{opacity:1,x:0},
          }}
        >
          <div className='relative'>
            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
              <img alt="home-page-text" src={HomePageText.src}/>          
            </div>
          </div>

          <p className='mt-8 text-sm md:text-start'>
            24uongp2u945hg549p02ghuwt4pnv249gn452gn
            q3o4iufbqp3ufbpuq34fbq34pfbq34fq34fbq34f
            q3pu4fbq394pfb3q498fhqp3f4hqp3948fhq39
          </p>
        </motion.div>

        {/*Actions*/}
        <motion.div 
          className='mt-8 flex items-center gap-8'
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{delay: 0.1 , duration:0.5}}
          variants={{
            hidden:{opacity:0,x:-75},
            visible:{opacity:1,x:0},
          }}
        >
          <ActionButton setSelectedPage={setSelectedPage}>
            Sign In
          </ActionButton>
          <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.Contact)}
            href={`#${SelectedPage.Contact}`}
          >
            <p>Read more</p>
          </AnchorLink>
        </motion.div>
      </div>

      {/*image*/}
      <div className='flex basis-3/5 justify-center 
      md:z-10 md:mt-16 md:justify-items-end'>
        <img alt="home-page-graphic" src={HomePageGraphic.src}/>
      </div>
    </motion.div>

    {/*Sponsors*/}
    <div className='h-[150px] w-full bg-primary-100 py-10'>
      <div className='mx-auto w-5/6'>
        <div className='flex w-3/5 items-center justify-between gap-8'>
          <img src={SponsorRedBull.src} alt="redbull-sponsor" />
          <img src={SponsorForbes.src} alt="forbes-sponsor" />
          <img src={SponsorFortune.src} alt="fortune-sponsor" />
        </div>
      </div>
    </div>
    </section>
  )
}

export default Hero