<script>
    import { Checkbox, Heading } from "flowbite-svelte";

    const fees = [
        "upto 10 lakhs",
        "upto 20 lakhs",
        "upto 30 lakhs",
        "upto 40 lakhs",
        "> 40 lakhs"
    ];
</script>

<div class="filter-box">
    <Heading tag="h5">Fee per Year</Heading>
    <div class="filter-options">
        {#each fees as fee}
            <Checkbox class="filter-values">{fee}</Checkbox>
        {/each}
    </div>
</div>
