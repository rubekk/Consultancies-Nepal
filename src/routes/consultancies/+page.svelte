<script>
  import Card from "../../components/Card.svelte";
  import { data } from "$lib/index.js";

  // Create a sorted version of the data array
  let sortedData = data.slice().sort((a, b) => {
    if (a.name && b.name) {
      return a.name.localeCompare(b.name); // Sort alphabetically by name
    }
    return 0;
  });
</script>

<svelte:head>
  <title>StudyAbroadNP - Top Consultancies in Nepal</title>
</svelte:head>

<div class="consultancies">
  <div class="page-title">List of Consultancies</div>
  <div class="consultancies-inner">
    {#each sortedData as indData}
      <Card
        name={indData.name}
        address={indData.address ? indData.address : "Putalisadak, Kathmandu"}
        imgSrc={indData.thumbnailImage ? indData.thumbnailImage : ""}
      />
    {/each}
  </div>
</div>

<style>
  .consultancies {
    padding: 3rem 2rem 4rem;
  }
  .page-title {
    margin: 0 auto 2.5rem;
    width: max-content;
    text-align: center;
    font-size: 2rem;
    border-bottom: 2px solid var(--blue);
  }
  .consultancies-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  }
  h4 {
    margin: 3rem 0 0;
    text-align: center;
  }
  h4 a {
    color: blue;
    text-decoration: underline;
  }
</style>
