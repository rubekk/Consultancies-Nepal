<script>
    import { Checkbox, Heading } from "flowbite-svelte";

    export let filterFunction;

    const exams = ["IELTS", "SAT", "TOEFL", "PTE", "GRE", "GMAT"];
</script>

<div class="filter-box">
    <Heading tag="h5">Accepted Exams</Heading>
    <div class="filter-options">
        {#each exams as exam}
            <Checkbox
                on:change={(e) => filterFunction(e.target.checked, exam)}
                class="filter-values">{exam}</Checkbox
            >
        {/each}
    </div>
</div>
