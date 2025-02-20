<script>
    import { Checkbox, Heading } from "flowbite-svelte";

    const degrees = ["Diploma", "Bachelors", "Masters"];
</script>

<div class="filter-box">
    <Heading tag="h5">Degree</Heading>
    <div class="filter-options">
        {#each degrees as degree}
            <Checkbox class="filter-values">{degree}</Checkbox>
        {/each}
    </div>
</div>
