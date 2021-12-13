import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { x } from '@xstyled/styled-components'

import BaseLayout from 'layouts/Base'

import Card from 'components/Card'
import Spinner from 'components/Spinner'
import VideoCardHeader from 'components/VideoCardHeader'

import parseYoutubeId from '../../shared/utils/getYtVideoId'
import useVideo from 'hooks/useVideo'
import YoutubeIframePlayer from 'components/YoutubePlayer'

const VideoLayout = () => {
  const router = useRouter()
  const { id } = router.query
  const [{ data, isLoading }] = useVideo(id as string)

  const [videoId, setVideoId] = useState<string>()

  useEffect(() => {
    if (data) {
      setVideoId(parseYoutubeId(data.url) as string)
    }
  }, [data])

  return (
    <BaseLayout flexDirection="column" py={4}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <VideoCardHeader title={data?.title as string} />
          <Card w={{ xs: 'sm', md: '2xl' }} p={{ xs: 2 }}>
            {videoId && (
              <YoutubeIframePlayer
                videoId={videoId}
                height="360"
                width="100%"
              />
            )}
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
