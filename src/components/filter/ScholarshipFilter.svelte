<script>
    import { Checkbox, Heading } from "flowbite-svelte";

    export let filterFunction;

    const scholarships = [
        "Fully funded",
        "Partially funded",
        "Free accomodation",
    ];
</script>

<div class="filter-box">
    <Heading tag="h5">Scholarship</Heading>
    <div class="filter-options">
        {#each scholarships as scholarship}
            <Checkbox
                on:click={(e) => filterFunction(e.target.checked, scholarship)}
                class="filter-values">{scholarship}</Checkbox
            >
        {/each}
    </div>
</div>
