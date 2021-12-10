export const getYouTubeThumbnail = (url: string): string => {
  let video: string, results

  if (url !== undefined || url !== null) {
    results = url.match('[\\?&]v=([^&#]*)')
    video = results === null ? url : results[1]
    return 'http://img.youtube.com/vi/' + video + '/0.jpg'
  }

  return ''
}
