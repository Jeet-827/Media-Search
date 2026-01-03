import axios from "axios"

const PEXLE = import.meta.env.VITE_PEXEL_KEY
const TENOR = import.meta.env.VITE_TENOR_KEY

export async function fetchGFI(query, limit = 20) {
  const response = await axios.get(
    "https://tenor.googleapis.com/v2/search",
    {
      params: { q: query, key: TENOR, limit }
    }
  )

  return response.data
}

export async function fetchVideos(query, per_page = 20) {
  const response = await axios.get(
    "https://api.pexels.com/videos/search",
    {
      params: { query, per_page },
      headers: { Authorization: PEXLE }
    }
  )

  return response.data
}

export async function fetchPhotos(query, per_page = 20) {
  const response = await axios.get(
    "https://api.pexels.com/v1/search",
    {
      params: { query, per_page },
      headers: { Authorization: PEXLE }
    }
  )

  return response.data
}
