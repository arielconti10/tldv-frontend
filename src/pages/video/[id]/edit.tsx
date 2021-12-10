import { NextSeo } from 'next-seo'

import VideoEditLayout from 'layouts/Video/edit'

const Video = () => {
  return (
    <>
      <NextSeo title="Video" />
      <VideoEditLayout />
    </>
  )
}

export default Video
