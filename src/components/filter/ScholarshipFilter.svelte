<script>
    import { Checkbox, Heading } from "flowbite-svelte";

    const scholarships = [
        "Fully funded",
        "Partially funded",
        "Free accomodation"
    ];
</script>

<div class="filter-box">
    <Heading tag="h5">Scholarship</Heading>
    <div class="filter-options">
        {#each scholarships as scholarship}
            <Checkbox class="filter-values">{scholarship}</Checkbox>
        {/each}
    </div>
</div>
