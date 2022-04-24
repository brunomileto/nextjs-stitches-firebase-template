import { render } from '@testing-library/react'
import Home from '../../pages/index'

test('test1', () => {
  const { getByText } = render(<Home repositories={[]} />)

  expect(getByText('teste')).toBeInTheDocument()
})
