import Link from 'next/link'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function Layout(props: DashboardLayoutProps) {
  return (
    <>
      <nav>
        <div className="my-5 text-blue-600 dark:text-blue-500">
          <Link className="mx-5 hover:underline" href={'/'}>
            Home page
          </Link>
          <Link className="mx-5 hover:underline" href={'/about'}>
            About page
          </Link>
          <Link className="mx-5 hover:underline" href={'/languages'}>
            Languages
          </Link>
          <Link className="mx-5 hover:underline" href={'/languages/french'}>
            Specific Language
          </Link>
        </div>
      </nav>
      <main>{props.children}</main>
    </>
  )
}
