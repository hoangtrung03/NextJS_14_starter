'use client'

import { useQuery } from '@tanstack/react-query'

export default function Navbar() {
  const { data } = useQuery({
    queryKey: ['test'],
    queryFn: () => fetch('https://restcountries.com/v3.1/all').then((res) => res.json())
  })

  console.log('data', data)

  return <div className='root'>Navbar Component</div>
}
