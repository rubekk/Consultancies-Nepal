<script>
    import { Checkbox, Heading } from "flowbite-svelte";

    export let filterFunction;

    const time = ["Full time", "Part time"];
</script>

<div class="filter-box">
    <Heading tag="h5">Time</Heading>
    <div class="filter-options">
        {#each time as t}
            <Checkbox
                on:click={(e) => filterFunction(e.target.checked, t)}
                class="filter-values">{t}</Checkbox
            >
        {/each}
    </div>
</div>
