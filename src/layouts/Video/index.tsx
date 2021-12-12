import { useRouter } from 'next/router'
import { x } from '@xstyled/styled-components'
import ReactPlayer from 'react-player/lazy'

import BaseLayout from 'layouts/Base'

import Card from 'components/Card'
import Spinner from 'components/Spinner'
import VideoCardHeader from 'components/VideoCardHeader'

import useVideo from 'hooks/useVideo'

const VideoLayout = () => {
  const router = useRouter()
  const { id } = router.query
  const [{ data, isLoading }] = useVideo(id as string)

  return (
    <BaseLayout flexDirection="column" py={4}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <VideoCardHeader title={data?.title as string} />
          <Card w={{ xs: 'sm', md: '2xl' }} p={{ xs: 2 }}>
            <ReactPlayer url={data?.url} width="100%" height="360px" />
            <x.div mt={2}>
              <x.span>
                {data?.slug}
                {' - '}
                {data?.url}
              </x.span>
            </x.div>
          </Card>
        </>
      )}
    </BaseLayout>
  )
}

export default VideoLayout
