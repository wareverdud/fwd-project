interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function Layout(props: DashboardLayoutProps) {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  )
}
