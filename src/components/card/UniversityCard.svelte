<script>
    import { filter } from "$lib/filter/filter"
    import { filterData } from "$lib/filter/filterFunctions"
    import { Card, Heading, Kbd } from "flowbite-svelte";
    import {
        MapPinAltOutline,
        CashOutline,
        ClockOutline,
    } from "flowbite-svelte-icons";

    let filteredUniversities = []

    filter.subscribe(value => {
        filteredUniversities = filterData(value)
    })
</script>

{#each filteredUniversities as universityData}
    <Card
        img={universityData.image_url}
        href={`/universities/${universityData.slug}`}
        horizontal
        size="lg"
        class="my-4"
        style="width: 100% !important; max-width: 100%;"
    >
        <Heading
            tag="h5"
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >{universityData.name}</Heading
        >
        <p
            class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight flex gap-2"
        >
            <MapPinAltOutline />
            {universityData.city}, {universityData.country}
        </p>
        <div class="flex gap-8">
            <p
                class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight flex gap-2"
            >
                <CashOutline />
                {universityData.min_fee} lakhs - {universityData.max_fee} lakhs
            </p>
            <p
                class="mb-5 font-normal text-gray-700 dark:text-gray-400 leading-tight flex gap-2"
            >
                <ClockOutline />
                {universityData.min_duration}
                {universityData.min_duration == 1 ? "year" : "years"} - {universityData.max_duration}
                years
            </p>
        </div>
        <div class="flex flex-wrap gap-2">
            {#each universityData.specializations.slice(0, 4) as specialization}
                <Kbd class="px-2 py-1.5">{specialization}</Kbd>
            {/each}
        </div>
    </Card>
{/each}
