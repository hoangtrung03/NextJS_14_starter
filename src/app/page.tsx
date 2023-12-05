import Navbar from '@/components/Navbar'
import { BASE_URL } from '@/constants/configGlobal'
import type { ISearchParam } from '@/types/common'

export async function generateMetadata() {
  return {
    metadataBase: new URL(BASE_URL as string),
    title: {
      default: 'Title Website'
    },
    description: 'Description website',
    keywords: 'Keyword website',
    openGraph: {
      title: {
        default: 'Title Website'
      },
      description: 'Description website',
      images: [
        {
          url: '/assets/images/about-us-banner.jpg',
          width: 1920,
          height: 1080
        }
      ],
      locale: 'en-US',
      type: 'website'
    },
    robots: {
      index: true
    }
  }
}

export default function Home({ searchParams }: { searchParams: ISearchParam }) {
  console.log('searchParams', searchParams.viewport)

  return (
    <main>
      <Navbar />
      <h1>Cửa hàng</h1>
    </main>
  )
}
