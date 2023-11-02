<script lang="ts">
    export let data;

    const popularMovies = data.popularMovies.results;
</script>

<h1 class="text-4xl font-bold">Welcome to SvelteKit</h1>

<ul class="p-4 mt-4">
    {#each popularMovies as movie}
        <li>
            <a href="{`/${movie.id}`}">{movie.title} / {movie.vote_average}</a>
        </li>
    {/each}
</ul>