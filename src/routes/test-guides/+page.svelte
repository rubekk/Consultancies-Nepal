<script>
  import { testData } from "$lib/index.js";
  import TestCard from "../../components/card/TestCard.svelte";
</script>

<svelte:head>
  <title>StudyAbroadNP - Language Test Guides</title>
</svelte:head>

<div class="test-guides-page">
  <div class="test-guides-inner">
    {#each testData as tData}
      <TestCard testData={tData} />
    {/each}
  </div>
</div>
