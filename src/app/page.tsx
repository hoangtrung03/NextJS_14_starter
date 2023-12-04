import Navbar from '@/components/Navbar'
import type { ISearchParam } from '@/types/common'

export async function generateMetadata() {
  return {
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
          url: 'meta image',
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
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Navbar />
    </main>
  )
}
