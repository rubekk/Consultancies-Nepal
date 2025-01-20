<script>
  import CountryCard from "../../components/CountryCard.svelte";
  import { countryData } from "$lib/index.js";
</script>

<svelte:head>
  <title>StudyAbroadNP - Study Abroad Destinations</title>
</svelte:head>

<div class="countries">
  <div class="countries-inner">
    {#each countryData as cData}
      <CountryCard countryData={cData} />
    {/each}
  </div>
</div>

<style>
  .countries-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  }
</style>
