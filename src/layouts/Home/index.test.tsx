import React from 'react'
import Home from './'
import { render } from '@testing-library/react'

import { wrapper } from '../../tests/utils'

it('Render Home', () => {
  render(<Home />, { wrapper })
})
