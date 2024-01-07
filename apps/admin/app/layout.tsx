import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'ui/styles/globals.css'
import Header from '../components/header'
import Favicon from '../public/favicon.ico'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store Admin',
  description: 'Store Admin to manage products and orders',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
