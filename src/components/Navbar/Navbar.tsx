'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import SwitchTheme from '../SwitchTheme'

export default function Navbar() {
  useQuery({
    queryKey: ['test'],
    queryFn: () => fetch('https://restcountries.com/v3.1/all').then((res) => res.json())
  })

  return (
    <>
      <header className='sticky top-0 bg-white dark:bg-primary-dark shadow-primary z-20'>
        <div className='container flex items-center py-2 lg:py-[8px] justify-between'>
          <Link href='/' title='Home' className='dark:text-white'>
            Shop
          </Link>
          <SwitchTheme />
        </div>
      </header>
    </>
  )
}
