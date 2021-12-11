import { useRouter } from 'next/router'
import { x, SystemProps } from '@xstyled/styled-components'
import Image from 'next/image'

import { Play, EditPencil } from '@styled-icons/zondicons'

export type VideoCardProps = {
  children?: React.ReactNode
  data: Video
} & SystemProps

import Button from 'components/Button'
import Card from 'components/Card'

import { Video } from 'shared/types'

const VideoCard = ({ children, data, ...props }: VideoCardProps) => {
  const router = useRouter()

  return (
    <Card
      maxWidth="xs"
      borderRadius="2xl"
      {...props}
      alignSelf="stretch"
      h="sm"
    >
      <Image src={data.thumbnailUrl} width="360" height="240" />

      <x.h1
        fontWeight="normal"
        fontSize={{ xs: 'lg', md: 'xl' }}
        lineHeight={6}
        mb={2}
        flex={1}
      >
        {data.title}
      </x.h1>

      <x.div display="flex" gap="2" alignItems="center" flexDirection="row">
        <Button
          onClick={() => {
            router.push(`/video/${data.id}`)
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          minWidth="48%"
          px={2}
          gap={2}
          minHeight="54px"
        >
          <Play width={30} height={30} />
          Watch
        </Button>

        <Button
          onClick={() => {
            router.push(`/video/${data.id}/edit`)
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          minWidth="48%"
          bg="cool-gray-600"
          px={2}
          gap={2}
          minHeight="54px"
        >
          <EditPencil width={20} height={20} />
          Edit
        </Button>
      </x.div>
      {children}
    </Card>
  )
}

export default VideoCard
