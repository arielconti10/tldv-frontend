import { x } from '@xstyled/styled-components'
import BaseLayout from 'layouts/Base'

import VideoCard from 'components/VideoCard'

import useVideos from '../../hooks/useVideos'
import Spinner from 'components/Spinner'

const HomeLayout = () => {
  const { status, data, error, isFetching } = useVideos()

  return (
    <BaseLayout flexDirection="column" py={4}>
      {status === 'loading' ? (
        <Spinner />
      ) : status === 'error' ? (
        <span>Error: {error && error.message}</span>
      ) : (
        <x.div
          row
          gap={2}
          my={4}
          px={6}
          flexWrap="wrap"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {data && data.length > 0
            ? data.map((video) => {
                return (
                  <x.div
                    key={video.id}
                    col
                    display="flex"
                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                  >
                    <VideoCard
                      key={video.id}
                      data={video}
                      my={4}
                      w={{ xs: '100%', md: 'xl' }}
                    />
                  </x.div>
                )
              })
            : 'No videos found'}
        </x.div>
      )}

      {isFetching && status !== 'loading' ? <Spinner /> : ' '}
    </BaseLayout>
  )
}

export default HomeLayout
