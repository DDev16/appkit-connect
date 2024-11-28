import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

import { cookies } from 'next/headers' // Updated import
import ContextProvider from '@/context'
import Header from '@/components/Header' // Added import for Header
import Footer from '@/components/Footer' // Added import for Footer

export const metadata: Metadata = {
  title: 'AppKit Example App',
  description: 'Powered by WalletConnect'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieHeader = cookies() // Fetch cookies during SSR

  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider cookies={cookieHeader?.toString() || null}>
        <Header /> {/* Added Header component */}
          {children}
          </ContextProvider>
        <Footer /> {/* Added Footer component */}
      </body>
    </html>
  )
}
