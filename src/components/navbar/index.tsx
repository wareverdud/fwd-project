import Link from 'next/link'
import React from 'react'
import Logo from '@/assets/Logo.png'
import Profile from '@/components/signOut'
import { auth } from '@/firebase/firebase-setup'

type Props = {
  isTopOfPage: boolean
}

const Navbar = ({ isTopOfPage }: Props) => {
  const flexBetween = 'flex items-center justify-between'
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow'
  return (
    <nav className="left-16 flex h-16">
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img alt="logo" src={Logo.src} />

            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <ul className="flex flex-row gap-8 text-lg font-medium">
                  <li>
                    <Link href={'/'}>Home</Link>
                  </li>
                  <li>
                    <Link href={'/languages'}>Languages</Link>
                  </li>
                  <li>
                    <Link href={'/about'}>About us</Link>
                  </li>
                </ul>
              </div>

              <div className={`${flexBetween} gap-8`}>
                {auth.currentUser && <Profile />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
