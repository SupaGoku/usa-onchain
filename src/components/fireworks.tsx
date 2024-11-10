import { useRef } from 'react'

import type { FireworksHandlers } from '@fireworks-js/react'
import { Fireworks } from '@fireworks-js/react'

export default function FireworksOverlay() {
  const ref = useRef<FireworksHandlers>(null)

  return (
    <Fireworks
      className="hidden md:block"
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.5,
      }}
    />
  )
}
