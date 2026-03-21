// Teto pear GIF component with constant rotation animation
'use client'

import Image from 'next/image'
import tetoPearGif from './pearto-kasane-teto.gif'

export default function TetoPear() {
  return (
    <div className="pear-container">
      <Image
        src={tetoPearGif}
        alt="Kasane Teto Pear"
        className="teto-pear"
        width={300}
        height={300}
        unoptimized
      />
    </div>
  )
}
