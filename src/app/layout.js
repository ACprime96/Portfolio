import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aditya Chandra | Software Engineer',
  description: 'Software engineer at Goldman Sachs specializing in distributed systems, data infrastructure, backend services, and APIs. Based in Salt Lake City, Utah.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
