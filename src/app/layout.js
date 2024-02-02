import { Inter } from 'next/font/google'
import './globals.css'
import ActionBanner from "@/app/components/ActionBanner";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Modern Pilgrim',
  description: 'Open source shared travel tips and tricks',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  )
}
