import HText from "@/shared/HText"
import { BenefitType, SelectedPage } from "@/shared/types"
import { HeartIcon } from "@heroicons/react/24/solid"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import {motion} from "framer-motion"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"


const benefits: Array<BenefitType> =[
    {
        icon: <HomeModernIcon className="h-6 w-6"/ >,
        title: "Big library of knowledge",
        description: "Больше твоей мамки ",

    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/ >,
        title: "Big & Reliable community",
        description: "Кто не с нами - тот под нами",

    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/ >,
        title: "Teachers and Proffessors  form over the World",
        description: "ПрофессионАналам не нужна смазка",

    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const container = {
    hidden:{},
    visible:{
        transition: {staggerChildren: 0.2}
    }
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20" // min-h-full it can expend and fit the content
    >
        <motion.div
            onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
            <motion.div
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{delay: 0.1 , duration:0.5}}
                variants={{
                  hidden:{opacity:0,x:-75},
                  visible:{opacity:1,x:0},
                }}
            >
                <HText>MORE THAN JUST A SCHOOL</HText>
                <p className="my-5 text-sm">
                    124124235134uigyt978134ogubilwrnho7w4uthgbq4g
                    13pu4gpq1ui4bgqyo35gb348p95ghq35oghq54gq4
                    q354g871354bpgq89452hgbq3ug4hqo43g5hpq4598ghq4
                    q34p7gbq45oig8hb54i3ug8hpq935i4g8jwhulier4g
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                variants={container}

                className="md:mt-5 items-center justify-between gap-8 md:flex">
                {benefits.map((benefit: BenefitType)=> (
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
                    className="mx-auto"
                    src={BenefitsPageGraphic.src} alt="benefit-page-graphic" 
                />

                {/* DESCRIPT */}
                <div>
                    {/* TITTLE */}
                    <div className="relative"> 
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once:true, amount:0.5}}
                            transition={{duration:0.5}}
                            variants={{
                              hidden:{opacity:0,x:-75},
                              visible:{opacity:1,x:0},
                            }}
                            className="before:absolute before:-top-20 before:-left-20
                            before:z-[1] before:content-abstractwaves"
                        >
                            <div className="relative">
                                <HText>
                                    MILLIONS OF DEAD SOULS PER MONTH{" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </div>
                        </motion.div>

                            
                    </div>
                    {/* DESCRIPT */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true, amount:0.5}}
                        transition={{delay: 0.1 , duration:0.5}}
                        variants={{
                          hidden:{opacity:0,x:-75},
                          visible:{opacity:1,x:0},
                        }}
                    >
                        <p className="mb-5">
                            apoirugbnj;v kfmepOGJIAEHBNKELMGRWFOPJNISH 
                           AEPUIHRBVJLKFN VIAPRUIBLJ
                        </p>
                        <p className="mb-5">
                            qp3u9hgb3498ghbu3if28HQG7OB8EUIRNWFphauboiwrlenjar; aepuvi
                            ae3pgu9vbieaiwfhuibsljnevrioanebjlk 
                        </p>
                    </motion.div>
                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 
                           before:z-[-1] before:content-sparkles">
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