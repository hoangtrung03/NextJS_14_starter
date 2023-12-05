import BaseComponent from '@/components/BaseComponent'
import Providers from '@/lib/hoc/Provider'
import { Montserrat } from 'next/font/google'
import { headers } from 'next/headers'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin', 'vietnamese'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const header = headers()
  const isChrome = header.get('light_house') as string | boolean

  if (isChrome === true || isChrome === 'true')
    return (
      <html lang='en'>
        <body className={montserrat.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    )

  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Providers>
          <BaseComponent />
          {children}
        </Providers>
      </body>
    </html>
  )
}
