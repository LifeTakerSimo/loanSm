import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '../contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Loan Simulator',
  description: 'Simulate your loan, rental income, and affordability all in one place.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}