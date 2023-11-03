export async function load({ fetch }) {
    const resposne = await fetch('api/get_popular_movies')
    const popularMovies = await resposne.json()

    const resposne2 = await fetch('api/get_user')
    const user = await resposne2.json()

    return { popularMovies, user }
}