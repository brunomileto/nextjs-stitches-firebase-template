import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  width: '100vw',
  height: '100vh',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  '& + h1': {
    color: '$cyan5',
    marginTop: 40
  }
})

const Text = styled('p', {
  fontFamily: '$system',
  color: '$loContrast',

  variants: {
    size: {
      1: {
        fontSize: '$1'
      },
      2: {
        fontSize: '$2'
      },
      3: {
        fontSize: '$3'
      }
    }
  }
})
