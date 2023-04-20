import React from 'react'
import Authorization from './authorization'
import { useState } from 'react'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Login from '@/components/signIn'
import SignUp from '@/components/signUp'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const SignIn = ({ setSelectedPage }: Props) => {
  const [signIn, setSignIn] = useState(true)

  //TODO
  // event: React.MouseEvent<HTMLInputElement, MouseEvent> shows error during build
  function handle(event: any) {
    if (event.target.value === 'Sign in') {
      setSignIn(true)
    } else {
      setSignIn(false)
    }
  }
  // const [signIn, setSignIn] = useState(true)
  //
  // function handle(event: any) {
  //   if (event.target.value === 'Sign in') {
  //     setSignIn(true)
  //   } else {
  //     setSignIn(false)
  //   }
  // }

  return (
    <section id="sign" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.SignIn)}>
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN IN</span>
          </HText>
          <p className="my-5">
            Join us today and embark on a rewarding linguistic journey!
          </p>
        </motion.div>

        {/* FORM */}
        <div className="mt-10 justify-between gap-8 md:flex">
          {/*<Authorization signIn={signIn} />*/}
          {signIn ? (
            <div>
              <Login />
            </div>
          ) : (
            <div>
              <SignUp />
            </div>
          )}
        </div>
        <input
          onClick={handle}
          type="button"
          value="Sign in"
          className="mx-5 hover:underline"
        />
        <input
          onClick={handle}
          type="button"
          value="Sign up"
          className="mx-5 hover:underline"
        />
      </motion.div>
    </section>
  )
}

export default SignIn
