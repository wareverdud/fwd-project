import React from 'react'
import Authorization from './authorization'
import { useState } from 'react'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const SignIn = ({setSelectedPage}: Props) => {
    const [signIn, setSignIn] = useState(true)

    function handle(event: any) {
      if (event.target.value === 'Sign in') {
        setSignIn(true)
      } else {
        setSignIn(false)
      }
    }

  return (
    <section id="sign" className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div
            onViewportEnter={()=>setSelectedPage(SelectedPage.SignIn)}
        >
            {/* HEADER */}
            <motion.div
                className='md:w-3/5'
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0,x:-75},
                    visible:{opacity:1,x:0},
                }}
            >
                <HText>
                    <span className='text-primary-500'>JOIN IN</span>
                </HText>
                <p className='my-5'>
                    Hello sign in we will kill you
                    awrgegraeraergnejlakbaegrneklrgnaerg
                    ae;rignlaejrgnaegnaelrgjn21412413251351 32rfefg wearing12345  gallery
                    234qf wgrsdg w534g45gw
                </p>
            </motion.div>

            {/* FORM */}
            <div className='mt-10 justify-between gap-8 md:flex'>
                <Authorization signIn={signIn} />
            </div>
            <input
                onClick={handle}
                type="button"
                value="Sign in"
                className="hover:underline mx-5"
            />
            <input
                onClick={handle}
                type="button"
                value="Sign up"
                className="hover:underline mx-5"
            />

        </motion.div>
      
    </section>
  )
}

export default SignIn