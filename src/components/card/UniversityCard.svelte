<script>
    import universitiesData from "$lib/data/universities.json";
    import { Card, Heading, Kbd } from "flowbite-svelte";
</script>

{#each universitiesData as universityData}
    <Card
        img={universityData.image_url}
        href={`/universities/${universityData.slug}`}
        horizontal
        size="lg"
        class="my-4"
    >
        <Heading
            tag="h5"
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >{universityData.name}</Heading
        >
        <p
            class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight"
        >
            {universityData.city}, {universityData.country}
        </p>
        <p
            class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight"
        >
            {universityData.average_fee}
        </p>
        {#each universityData.courses as course}
            <Kbd class="mr-2 px-2 py-1.5">{course}</Kbd>
        {/each}
    </Card>
{/each}
