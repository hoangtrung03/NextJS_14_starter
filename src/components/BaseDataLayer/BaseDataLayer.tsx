'use client'

import { PAGE_TYPE } from '@/constants/apiEndpoints'
import { useDataLayerDefault } from '@/lib/dataLayer/base-datalayer'
import { useEffect } from 'react'

// import { usePathname, useSelectedLayoutSegments } from 'next/navigation'

export default function BaseDataLayer() {
  // const pathName = usePathname()

  // const segments = useSelectedLayoutSegments()
  // const pathNameParts = removeItemsWithParentheses(segments)
  useEffect(() => {
    useDataLayerDefault({
      dynx_userID: 'anonymous',
      dynx_pagetype: PAGE_TYPE.HOME
    })
  }, [])

  return null
}

// function removeItemsWithParentheses(arr: Array<string>) {
//   return arr.filter((item) => {
//     const startsWithParentheses = item.startsWith('(')
//     const endsWithParentheses = item.endsWith(')')

//     return !startsWithParentheses && !endsWithParentheses
//   })
// }
