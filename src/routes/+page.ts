export async function load({ fetch }) {
    const resposne = await fetch('api/get_popular_movies')
    const popularMovies = await resposne.json()

    return { popularMovies }
}