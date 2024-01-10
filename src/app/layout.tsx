import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NextThemeProvider from './providers/NextThemeProvider'
import NextAuthProvider from './providers/NextAuthProvider'
import GlobalState, { GlobalContext } from './context'
import NavBar from '@/components/NavBar'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body className='dark:bg-black'>
        <NextThemeProvider>
          <NextAuthProvider>
            <GlobalState>
              <NavBar/>
              {children}
            </GlobalState>
          </NextAuthProvider>
        </NextThemeProvider>
      </body>
    </html>
  )
}
