
import Navbar from '@/components/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import Footer from '@/components/Footer'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Food Search App',
  description: 'Build using nextjs and rapid api',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
