<script>
    import { Checkbox, Heading } from "flowbite-svelte";

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
    ];
</script>

<div class="filter-box">
    <Heading tag="h5">Specialization</Heading>
    <div class="filter-options">
        {#each fields as field}
            <Checkbox class="filter-values">{field}</Checkbox>
        {/each}
    </div>
</div>
