<script>
    import { Checkbox, Heading } from "flowbite-svelte";

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
            <Checkbox class="filter-values">{country}</Checkbox>
        {/each}
    </div>
</div>
