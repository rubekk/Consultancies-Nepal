<script>
    import { testData } from "$lib/index.js";
    import TestCard from "../../components/TestCard.svelte";
</script>

<svelte:head>
  <title>StudyAbroadNP - Language Test Guides</title>
</svelte:head>

<div class="test-guides">
    <div class="test-guides-inner">
        {#each testData as tData}
<<<<<<< HEAD
        <TestCard testData={tData} />
=======
            <TestCard testData={tData} />
>>>>>>> origin/master
        {/each}
    </div>
</div>
