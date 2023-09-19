import '@/styles/globals.css'
import '@/styles/app.scss'
import type { AppProps } from 'next/app'
import { MainLayout } from '@/shared/layouts/main-layout/main-layout'

export default function App({ Component, pageProps }: AppProps) {
  return <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
}