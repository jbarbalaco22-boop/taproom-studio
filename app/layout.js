import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata = {
  title: 'Taproom Studio - Fast Brewery Websites',
  description: 'Mobile-first websites for craft breweries. Built in 3 minutes. Managed by you.',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0c0a09',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
