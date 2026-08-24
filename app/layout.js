import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Taproom Studio - Fast Brewery Websites',
  description: 'Mobile-first websites for craft breweries. Built in 3 minutes. Managed by you.',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1e293b',
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
