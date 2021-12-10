import { useRouter } from 'next/router'
import { x } from '@xstyled/styled-components'
import YouTube from '@u-wave/react-youtube'

import BaseLayout from 'layouts/Base'

import Card from 'components/Card'
import Spinner from 'components/Spinner'
import VideoCardHeader from 'components/VideoCardHeader'

import useVideo from 'hooks/useVideo'

const VideoLayout = () => {
  const router = useRouter()
  const { id } = router.query
  const [{ data, isLoading }] = useVideo(id as string)

  const getVideoIdFromUrl = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)

    return match && match[2].length === 11 ? match[2] : null
  }

  return (
    <BaseLayout flexDirection="column" py={4}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <VideoCardHeader title={data?.title as string} />
          <Card w={{ xs: 'sm', md: '2xl' }} p={{ xs: 2 }}>
            <YouTube
              video={getVideoIdFromUrl(data?.url as string) as string}
              width="100%"
              height="360"
            />
            <x.div mt={2}>
              <x.span>Video url</x.span>
            </x.div>
          </Card>
        </>
      )}
    </BaseLayout>
  )
}

export default VideoLayout
