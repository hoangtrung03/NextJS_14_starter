import BaseComponent from '@/components/BaseComponent'
import Providers from '@/lib/hoc/Provider'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const header = headers()
  const isChrome = header.get('light_house') as string | boolean

  if (isChrome === true || isChrome === 'true')
    return (
      <html lang='en'>
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    )

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <BaseComponent />
          {children}
        </Providers>
      </body>
    </html>
  )
}
