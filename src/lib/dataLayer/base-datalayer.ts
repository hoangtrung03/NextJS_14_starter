import type { DataLayerDefault } from '@/types/datalayer.type'
import { sendGTMEvent } from '@next/third-parties/google'

export const useDataLayerDefault = (options: DataLayerDefault) => {
  // window.dataLayer?.push({
  //   event: null,
  //   _clear: true,
  //   email: null,
  //   phone_number: null,
  //   ...options
  // })
  sendGTMEvent({
    dataLayer: {
      event: null,
      _clear: true,
      email: null,
      phone_number: null,
      ...options
    }
  })
}
