import Link from '@/components/navbar/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'
import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'

type Props = {
  isTopOfPage: boolean
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between'
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow'
  return (
    <nav className="left-16 flex h-16 w-screen">
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/*Left side*/}
            <img alt="logo" src={Logo.src} />

            {/*Right side*/}
            <div className={`${flexBetween} w-full`}>
              {/*Links*/}
              <div className={`${flexBetween} gap-8 text-sm`}>
                <ul className="flex flex-row gap-8">
                  <li>
                    <Link
                      page="Home"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </li>
                  <li>
                    <Link
                      page="Benefits"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </li>
                  <li>
                    <Link
                      page="Notes"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </li>
                  <li>
                    <Link
                      page="Gallery"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </li>
                </ul>
              </div>

              <div className={`${flexBetween} gap-8`}>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Sign In
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

{
  /* <nav className='flex left-16 h-16 w-screen'>

</nav> */
}
