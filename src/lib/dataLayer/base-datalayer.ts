import type { DataLayerDefault } from '@/types/datalayer.type'

export const useDataLayerDefault = (options: DataLayerDefault) => {
  window.dataLayer?.push({
    event: null,
    _clear: true,
    email: null,
    phone_number: null,
    ...options
  })
}
