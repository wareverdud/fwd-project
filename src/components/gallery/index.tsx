import { SelectedPage, PhotosType } from '@/shared/types';
import Photo from "./Photo"
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import React from 'react'
import { motion } from 'framer-motion';
import HText from '@/shared/HText';

const photos: Array<PhotosType> = [
    {
        name:"White girls and black boys",
        image:image1.src,
    },
    {
        name:"2 beatiful girls and toys",
        description:"2349p8th2bo4gupqnoefwjqhbowurnerlimb[ekarsgijb",
        image:image2.src,
    },
    {
        name:"Language teacher wearing skirt",
        description:"2349p8th2bo4gupqnoefwjqhbowurnerlimb[ekarsgijb",
        image:image3.src,
    },
    {
        name:"White girls",
        image:image4.src,
    },
    {
        name:"2 black boys",
        description:"2349p8th2bo4gupqnoefwjqhbowurnerlimb[ekarsgijb",
        image:image5.src,
    },
    {
        name:"Adult plays",
        description:"2349p8th2bo4gupqnoefwjqhbowurnerlimb[ekarsgijb",
        image:image6.src,
    },


]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Gallery = ({setSelectedPage}:Props) => {
  return (
    <section id="gallery" className='w-full bg-primary-100 py-40'>
        <motion.div
            onViewportEnter={()=> setSelectedPage(SelectedPage.Gallery)}
        >
            <motion.div
                className='mx-auto w-5/6'
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0,x:-75},
                    visible:{opacity:1,x:0},
                }}
            >
                <div className='md:w-3/5'>
                    <HText>OUR MEDIA</HText>
                    <p className='py-5'>
                        gbhjnk  oepfragegsruhbhjnkrfaef98ruhrj
                        ru893tr4ihjfnkaesfigr8uohkrfyebsjf,nkerffigu
                        q34tu8o9urhqrfjaejiofuiehfjk
                    </p>
                    
                </div>
            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[-2800px] whitespace-nowrap'> {/*this is how overflow performed: child has bigger value then parent*/}
                    {photos.map((item:PhotosType,index) => (
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