const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export async function load({ params }) {
  const movieId = params.movieId
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`,
    )
    const data = await response.json()
    // console.log(data);
    return data
  } catch (e) {
    throw new Error(`Could not find TMDB popular movies`)
  }
}