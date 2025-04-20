<script>
    import { Checkbox, Heading } from "flowbite-svelte";

    export let filterFunction;

    const countries = [
        "USA",
        "Europe",
        "Germany",
        "UK",
        "Australia",
        "New Zealand",
        "Japan",
        "South Korea",
        "Singapore",
        "Canada",
    ];
</script>

<div class="filter-box">
    <Heading tag="h5">Country</Heading>
    <div class="filter-options">
        {#each countries as country}
            <Checkbox
                on:click={(e) => filterFunction(e.target.checked, country)}
                class="filter-values">{country}</Checkbox
            >
        {/each}
    </div>
</div>
