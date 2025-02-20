<script>
    import { Checkbox, Heading } from "flowbite-svelte";

    const durations = [
        "<= 1 year",
        "<= 2 years",
        "<= 3 years",
        "<= 4 years",
        "5 years"
    ];
</script>

<div class="filter-box">
    <Heading tag="h5">Duration</Heading>
    <div class="filter-options">
        {#each durations as duration}
            <Checkbox class="filter-values">{duration}</Checkbox>
        {/each}
    </div>
</div>
