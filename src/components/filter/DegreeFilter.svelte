<script>
    import { Checkbox, Heading } from "flowbite-svelte";

    export let filterFunction;

    const degrees = ["Diploma", "Bachelors", "Masters"];
</script>

<div class="filter-box">
    <Heading tag="h5">Degree</Heading>
    <div class="filter-options">
        {#each degrees as degree}
            <Checkbox
                on:click={(e) => filterFunction(e.target.checked, degree)}
                class="filter-values">{degree}</Checkbox
            >
        {/each}
    </div>
</div>
