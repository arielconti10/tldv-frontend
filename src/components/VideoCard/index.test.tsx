import React from 'react'
import VideoCard from './'
import { fireEvent, screen, render } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'

import { createMockRouter, wrapper } from '../../tests/utils'

it('Render Video Card', () => {
  render(
    <VideoCard
      data={{
        id: '61b00b1b8cfdc6e6cec2c0ef',
        title: 'Teste Video 1',
        slug: 'test-video-1',
        url: 'https://www.youtube.com/watch?v=etLHPhLy8Q0',
        thumbnailUrl: 'https://i.ytimg.com/vi/etLHPhLy8Q0/hqdefault.jpg',
        isPublic: true
      }}
    />,
    { wrapper }
  )
})

it('calls router.push with "/contacts', () => {
  const router = createMockRouter({
    query: { id: '44' },
    pathname: 'joao',
    basePath: 'antunes'
  })

  render(
    <RouterContext.Provider value={router}>
      <VideoCard
        data={{
          id: '61b00b1b8cfdc6e6cec2c0ef',
          title: 'Teste Video 1',
          slug: 'test-video-1',
          url: 'https://www.youtube.com/watch?v=etLHPhLy8Q0',
          thumbnailUrl: 'https://i.ytimg.com/vi/etLHPhLy8Q0/hqdefault.jpg',
          isPublic: true
        }}
      />
      ;
    </RouterContext.Provider>
  )

  fireEvent.click(screen.getByRole('button', { name: 'Watch' }))
  expect(router.push).toHaveBeenCalledWith('/video/61b00b1b8cfdc6e6cec2c0ef')
})
