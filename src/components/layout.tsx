import Link from 'next/link'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function Layout(props: DashboardLayoutProps) {
  return (
    <>
      <nav>
        <ul className="text-blue-600 dark:text-blue-500">
          <li>
            <Link className="hover:underline" href={'/'}>
              Home page
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={'/about'}>
              About page
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={'/notes'}>
              Notes
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={'/note/465768'}>
              Specific Note
            </Link>
          </li>
        </ul>
      </nav>
      <main>{props.children}</main>
    </>
  )
}
