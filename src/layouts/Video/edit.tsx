import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { x } from '@xstyled/styled-components'
import { ArrowLeft } from '@styled-icons/zondicons'

import BaseLayout from 'layouts/Base'

import Button from 'components/Button'
import Card from 'components/Card'
import Spinner from 'components/Spinner'

import { Video } from 'shared/types'

import useVideo from 'hooks/useVideo'
import Input from 'components/Input'
import Toggle from 'components/Toggle'

const VideoEditLayout = () => {
  const router = useRouter()
  const { id } = router.query
  const [{ status, data, error }, mutation] = useVideo(id as string)

  const initialState = {
    title: '',
    url: '',
    slug: '',
    isPublic: false
  } as Video

  const [videoData, setVideoData] = useState<Video>(initialState)

  useEffect(() => {
    if (data) {
      setVideoData(data)
    }
  }, [data])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setVideoData({ ...videoData, [name]: value })
  }

  const handleMutate = async () => {
    try {
      mutation.mutate({
        videoData,
        id: id as string
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <BaseLayout flexDirection="column" py={4}>
      {status === 'error' && <p>Error: {error}</p>}
      {status === 'success' && (
        <>
          <x.div
            display="flex"
            flexDirection="row"
            alignItems="center"
            mb={8}
            px={{ xs: 1, md: 4 }}
            w={{ xs: '100%', md: '3xl' }}
          >
            <Button
              bg="transparent"
              color="gray-200"
              boxShadow="none"
              alignSelf="flex-start"
              aria-label="Go back"
              p={{ xs: 2, md: 2 }}
              mx={{ md: 4 }}
              onClick={() => {
                router.back()
              }}
            >
              <ArrowLeft size={16} />
            </Button>
            <x.h1
              fontSize={{ md: '3xl', xs: 'lg' }}
              overflow="hidden"
              textOverflow="ellipsis"
              textAlign="center"
            >
              {data?.title}
            </x.h1>
          </x.div>
          <Card
            w={{ xs: 'sm', md: 'xl' }}
            display="flex"
            flexDirection="column"
            gap={5}
            minHeight="md"
          >
            {mutation.status === 'loading' ? (
              <Spinner />
            ) : (
              <x.form name="edit-video" px={2}>
                <Input
                  label="Title"
                  name="title"
                  type="text"
                  value={videoData.title}
                  onChange={handleChange}
                />

                <Input
                  label="Video URL (Youtube)"
                  name="url"
                  type="text"
                  value={videoData.url}
                  onChange={handleChange}
                />

                <Input
                  label="Slug"
                  name="slug"
                  type="text"
                  value={videoData.slug}
                  onChange={handleChange}
                />

                <x.fieldset>
                  <x.label htmlFor="isPublic">Public</x.label>
                  <x.div display="flex" alignItems="center" gap={2} mt={2}>
                    Yes
                    <Toggle
                      name="isPublic"
                      checked={videoData.isPublic}
                      onChange={(e) => {
                        setVideoData({
                          ...videoData,
                          isPublic: e.target.checked
                        })
                      }}
                    />
                    No
                  </x.div>
                </x.fieldset>

                <Button
                  onClick={handleMutate}
                  mt={4}
                  w="200"
                  justifyContent="center"
                >
                  Save
                </Button>
              </x.form>
            )}
          </Card>
        </>
      )}
    </BaseLayout>
  )
}

export default VideoEditLayout
