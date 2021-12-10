import React from 'react'
import VideoCardHeader from './'
import { screen, render } from '@testing-library/react'

it('Render VideoCardHeader component', () => {
  render(<VideoCardHeader title="Video test 1" />)
  expect(screen.getByText('Video test 1')).toBeInTheDocument()
})
