import { useMutation, useQuery } from 'react-query'
import { Video } from 'shared/types'
import { getYouTubeThumbnail } from 'shared/utils/getYtThumbnail'
import api from '../services/api'

interface VideoVariables {
  videoData: Video
  id: string
}

const getVideo = async (id: string): Promise<Video> => {
  const { data } = await api.get<Video>(`/videos/${id}`)
  data.thumbnailUrl = getYouTubeThumbnail(data.url)
  return data
}

export default function useVideo(videoId: string) {
  const mutation = useMutation(
    ({ videoData, id }: VideoVariables) => {
      return api.put(`/videos/${id}`, videoData)
    },
    {
      onSuccess: (data) => {
        console.log(data)
        // router.push('/videos')
      },
      onError: (error) => {
        // An error happened!
        console.log(`error: ${error}`)
      }
    }
  )

  const query = useQuery(['video', videoId], () => getVideo(videoId))

  return [query, mutation] as const
}
