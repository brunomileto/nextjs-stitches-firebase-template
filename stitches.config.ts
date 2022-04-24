import { createStitches } from '@stitches/react'
import { cyan } from '@radix-ui/colors'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui'
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',
      ...cyan
    },
    fontSizes: {
      1: '10px',
      2: '14px',
      3: '18px'
    }
  }
})
