import { Story, Meta } from '@storybook/react'

import VideoCard, { VideoCardProps } from '.'

export default {
  title: 'VideoCard',
  component: VideoCard,
  args: {
    bg: 'white',
    data: {
      id: '6',
      title: 'Example video',
      slug: 'example-video',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnailUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      isPublic: true
    }
  }
} as Meta

export const Default: Story<VideoCardProps> = (args) => <VideoCard {...args} />
