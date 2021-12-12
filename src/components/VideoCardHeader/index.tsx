import { useRouter } from 'next/router'
import { x } from '@xstyled/styled-components'
import { ArrowLeft } from '@styled-icons/zondicons'

import Button from 'components/Button'

interface VideoCardHeaderProps {
  title: string
}

const VideoCardHeader = ({ title }: VideoCardHeaderProps) => {
  const router = useRouter()

  return (
    <x.div display="flex" flexDirection="row" alignItems="center" mb={8}>
      <Button
        bg="transparent"
        color="gray-200"
        boxShadow="none"
        alignSelf="flex-start"
        p={{ xs: 2, md: 2 }}
        mx={{ md: 4 }}
        onClick={() => {
          router.back()
        }}
        aria-label="Go back"
      >
        <ArrowLeft size={16} />
      </Button>
      <x.h1
        fontSize={{ md: '3xl', xs: 'lg' }}
        overflow="hidden"
        textOverflow="ellipsis"
        textAlign="center"
      >
        {title}
      </x.h1>
    </x.div>
  )
}

export default VideoCardHeader
