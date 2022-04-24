import { styled, globalCss } from '../../stitches.config'
export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '$system',
    color: '$loContrast'
  },
  body: {
    background: '#121214',
    color: '#e1e1e6'
  }
})
