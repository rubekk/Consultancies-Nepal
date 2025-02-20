<script>
    import { Checkbox, Heading } from "flowbite-svelte";

    const time = [
        "Full time",
        "Part time"
    ];
</script>

<div class="filter-box">
    <Heading tag="h5">Time</Heading>
    <div class="filter-options">
        {#each time as t}
            <Checkbox class="filter-values">{t}</Checkbox>
        {/each}
    </div>
</div>
