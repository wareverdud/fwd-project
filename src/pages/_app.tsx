import '@/styles/global.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  if (router.basePath === '/') {
    return <Component {...pageProps} />
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
