<script>
    import { Checkbox, Heading } from "flowbite-svelte";

    export let filterFunction;

    const fields = [
        "Information Technology",
        "Accounting",
        "Engineering",
        "Business",
        "Economics",
        "Computer Science",
        "Data Science",
        "Philosophy",
        "Cyber Security",
        "Artificial Intelligence",
        "Entrepreneurship"
    ];
</script>

<div class="filter-box">
    <Heading tag="h5">Specialization</Heading>
    <div class="filter-options">
        {#each fields as field}
            <Checkbox on:click={e => filterFunction(e.target.checked, field)} class="filter-values">{field}</Checkbox>
        {/each}
    </div>
</div>
