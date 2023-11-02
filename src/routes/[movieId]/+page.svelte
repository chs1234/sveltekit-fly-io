<script lang="ts">
    export let data;
</script>

<section class="p-4">
    <h1 class="text-4xl">
        {data.title}
    </h1>
    <img src={`https://image.tmdb.org/t/p/w780${data.backdrop_path}`} class="h-40 w-full object-cover sh:h-72 md:h-80 lg:h-96" alt={data.title} />
    <h2>{data.overview}</h2>
</section>