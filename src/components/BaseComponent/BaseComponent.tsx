import { NEXT_PUBLIC_GOOGLE_GTM } from '@/constants/configGlobal'
import Script from 'next/script'
import BaseDataLayer from '../BaseDataLayer'

export default function BaseComponent() {
  return (
    <>
      {NEXT_PUBLIC_GOOGLE_GTM && (
        <>
          <Script
            id='google-tag-manager'
            dangerouslySetInnerHTML={{
              __html: `<!-- Google Tag Manager -->
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${NEXT_PUBLIC_GOOGLE_GTM}');
          <!-- End Google Tag Manager -->`
            }}
          />
          <BaseDataLayer />
        </>
      )}
    </>
  )
}
