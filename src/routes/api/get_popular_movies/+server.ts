import { json } from "@sveltejs/kit";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

async function getPopularMovies() {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`)
        const data = await response.json();

        return data;
    } catch(e) {
        throw new Error(`${e}`)
    }
}

export async function GET() {
    const popularMovies = await getPopularMovies()
    return json(popularMovies)
}