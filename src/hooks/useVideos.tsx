import { useQuery, UseQueryResult } from 'react-query'
import { Video } from 'shared/types'
import { getYouTubeThumbnail } from 'shared/utils/getYtThumbnail'
import api from '../services/api'

const getVideos = async (): Promise<Video[]> => {
  const { data } = await api.get<Video[]>('/videos')

  data.map((video) => {
    video.thumbnailUrl = getYouTubeThumbnail(video.url)
    return video
  })

  return data
}

export default function useVideos(): UseQueryResult<Video[], Error> {
  return useQuery('videos', getVideos)
}
