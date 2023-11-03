<script lang="ts">
    export let data;

    const popularMovies = data.popularMovies.results;
    const user = data.user[0]
    console.log(user)
</script>

<h1 class="text-4xl font-bold">Welcome to SvelteKit</h1>

{#if user.username}
  <h2 class="text-2xl font-semibold">Hello! {user.username}</h2>
{:else}
  <h2 class="text-2xl font-semibold">Hello! There!</h2>
{/if}

<ul class="p-4 mt-4">
    {#each popularMovies as movie}
        <li>
            <a href="{`/${movie.id}`}">{movie.title} / {movie.vote_average}</a>
        </li>
    {/each}
</ul>