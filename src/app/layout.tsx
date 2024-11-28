import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

import { cookies } from 'next/headers' // Updated import
import ContextProvider from '@/context'

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
        <ContextProvider cookies={cookieHeader?.toString() || null}>{children}</ContextProvider>
      </body>
    </html>
  )
}
