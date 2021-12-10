import { NextSeo } from 'next-seo'

import VideoLayout from 'layouts/Video'

const Video = () => {
  return (
    <>
      <NextSeo title="Video" />
      <VideoLayout />
    </>
  )
}

export default Video
