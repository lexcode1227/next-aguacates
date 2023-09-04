import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Providers from './Store/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Avocate Shop | platzi ',
  description: 'This is a avocate shop in which you will find the whole variaty of avos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
            <Navbar/>
            {children}
            <Footer/>
        </body>
      </Providers>
    </html>
  )
}
