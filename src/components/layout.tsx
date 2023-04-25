import { useEffect, useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { SelectedPage } from '@/shared/types'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function Layout(props: DashboardLayoutProps) {
  // <> from location of _app.tsx, where homepage componenents where placed

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      } else {
        setIsTopOfPage(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // </> from location of _app.tsx, where homepage componenents where placed

  return (
    <>
      <Navbar isTopOfPage={isTopOfPage} />

      <main>{props.children}</main>

      <Footer setSelectedPage={setSelectedPage} />
    </>
  )
}
