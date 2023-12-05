import { BASE_URL } from '@/constants/configGlobal'
import Image from 'next/image'

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

export default function Home() {
  return (
    <section className='relative'>
      <div className='w-full h-[22.5rem] md:h-[45rem] relative'>
        <Image
          src='/assets/images/about-us-banner.jpg'
          fill
          alt='About Us'
          title='About Us'
          priority={true}
          sizes='(max-width: 768px) 100vw, 100vw'
          style={{ objectFit: 'cover' }}
          className='hidden md:block md:brightness-80'
        />
        <Image
          src='/assets/images/about-us-banner-xs.jpg'
          fill
          alt='About Us'
          title='About Us'
          priority={true}
          sizes='(max-width: 768px) 100vw, 100vw'
          style={{ objectFit: 'cover' }}
          className='md:hidden'
        />
      </div>
      <div className='container w-full md:-mt-5 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:z-10 -mt-6'>
        <div className='lg:max-w-[41.4rem] px-4 py-6 md:p-0 rounded-2xl md:rounded-none md:bg-transparent bg-white shadow-primary md:shadow-none relative'>
          <h1 className='text-32 md:text-64 font-bold md:text-white leading-1-1'>About Us</h1>
          <p className='text-16 md:text-18 mt-4 md:text-white leading-1-4'>Travel Safer, Smarter and Easier</p>
        </div>
      </div>
    </section>
  )
}
